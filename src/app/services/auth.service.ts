import { A } from '@angular/cdk/keycodes';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {
  CognitoUserPool,
  AuthenticationDetails,
  CognitoUser,
  CognitoUserAttribute,
} from 'amazon-cognito-identity-js';
import { environment } from 'src/environments/environment';
import { AppConfigService } from './app-config.service';


interface formDataInterface {
  'custom:organization_name': string;
  'custom:first_name': string;
  'custom:last_name': string;
  'custom:phone': string;
  'custom:dob': string;
  [key: string]: string;
}
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  poolData = {
    UserPoolId: environment.userPoolId, // Your user pool id here
    ClientId: environment.clientId, // Your client id here
  };
  userPool = new CognitoUserPool(this.poolData);
  constructor(
    private router: Router
  ) {
  }

  onSignIn(form: FormGroup) {
    let res;
    if (form.valid) {
      let authenticationDetails = new AuthenticationDetails({
        Username: form.get('Username')?.value,
        Password: form.get('Password')?.value,
      });
      let userData = {
        Username: form.get('Username')?.value,
        Pool: this.userPool,
      };

      //TODO: cleaning tokenData
      localStorage.removeItem('tokenData');
      //END TODO
      var cognitoUser = new CognitoUser(userData);
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: (result: any) => {
          console.log(result);
          //TODO: set tokenData for later invoking API
          localStorage.setItem('tokenData', JSON.stringify(result));
          //END TODO
          this.router.navigateByUrl('/payment');
          // this.router.navigate(['/']);
        },
        onFailure: (err: any) => {
         res = err;
         alert("Tên đăng nhập hoặc mật khẩu không chính xác." || JSON.stringify(err));
        },
      });
    } else {
      console.log('invalid');
    }
    return res;
  }

  onChangePassword(oldPassword, newPassword, userName) {
    let authenticationDetails = new AuthenticationDetails({
      Username: userName,
      Password: oldPassword,
    });
    let userData = {
      Username: userName,
      Pool: this.userPool,
    };
    var cognitoUser = new CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result: any) => {
        cognitoUser.changePassword(
          oldPassword,
          newPassword,
          function (err, res) {
            if (err) {
              console.log(err);
              alert(err.message || JSON.stringify(err));
              return;
            }
            alert('Đổi mật khẩu thành công');
          }
        );
      },
      onFailure: (err: any) => {
        if (err.message === 'Incorrect username or password.') {
          alert('Mật khẩu cũ không đúng');
        }
      },
    });
  }
  onSignUpChallengeByOTP(otp: string, check = false) {
    let userData = {
      Username: localStorage.getItem('email'),
      Pool: this.userPool,
    };
    //TODO: cleaning tokenData
    localStorage.removeItem('tokenData');
    var cognitoUser = new CognitoUser(userData);
    cognitoUser.sendCustomChallengeAnswer(otp, {
      onSuccess: (result: any) => {
        console.log(result);
        check = true;
        //TODO: set tokenData for later invoking API
        localStorage.setItem('tokenData', JSON.stringify(result));
          //END TODO
          // this.router.navigate(['/']);
        // this.router.navigateByUrl('/marketplace');
        alert('login thành công');
        //END TODO
      },
      onFailure: (err: any) => {
        alert(err.message || JSON.stringify(err));
      },
    });
  }
  onSignup(form: FormGroup) {
    if (form.valid) {
      var attributeList = [];
      let formData: formDataInterface = {
        'custom:organization_name': form.value['Username'],
        'custom:first_name': form.value['FirstName'],
        'custom:last_name': form.value['LastName'],
        'custom:phone': form.value['Phone'],
        'custom:dob': form.value['DOB'],
      };
      for (let key in formData) {
        let attrData = {
          Name: key,
          Value: formData[key],
        };
        let attribute = new CognitoUserAttribute(attrData);
        attributeList.push(attribute);
      }
      this.userPool.signUp(
        form.get('Email')?.value,
        form.get('Password')?.value,
        attributeList,
        [],
        (err, result) => {
          if (err) {
            alert(err.message || JSON.stringify(err));
            return;
          } else {
            localStorage.setItem('email', form.get('Email')?.value);
            this.router.navigate(['/login']);
          }
        }
      );
    } else {
      // this.message.error('Invalid');
    }
  }

  isLoggedIn(): boolean {
    var isAuth = false;
    var cognitoUser = this.userPool.getCurrentUser();
    if (cognitoUser != null) {
      cognitoUser.getSession((err: any, session: any) => {
        if (err) {
          alert(err.message || JSON.stringify(err));
        }
        isAuth = session.isValid();
      });
    }
    return isAuth;
  }

  onForgot(userName: string) {
    if (userName) {
      var userData = {
        Username: userName,
        Pool: this.userPool,
      };
      var cognitoUser = new CognitoUser(userData);
      return new Promise<void>((resolve, reject) => {
        cognitoUser.forgotPassword({
          onSuccess: function (data) {
            console.log(data);
            resolve();
          },
          onFailure: function (err) {
            alert(err.message || JSON.stringify(err));
            reject(err);
          },
        });
      })
    }
  }

  confirmPassword(
    username: string,
    verificationCode: string,
    newPassword: string
  ) {
    let cognitoUser = new CognitoUser({
      Username: username,
      Pool: this.userPool,
    });

    return new Promise<void>((resolve, reject) => {
      cognitoUser.confirmPassword(verificationCode, newPassword, {
        onFailure(err) {
          alert(err.message || JSON.stringify(err));
          reject(err);
        },
        onSuccess() {
          resolve();
        },
      });
    });
  }

  onLogout(): void {
    if (this.userPool) {
      let cognitoUser = this.userPool.getCurrentUser();
      cognitoUser?.signOut();
    }
    localStorage.clear();
    localStorage.removeItem('tokenData');
    this.router.navigate(['login']);
  }

  
}

