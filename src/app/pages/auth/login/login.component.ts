import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Globals } from 'src/app/models/global/global';
import { BaseThemeService } from 'src/app/services/base-theme.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  globals: Globals = new Globals();
  loginForm!: FormGroup;
  submitted = false;
  typePass = 'password';

  constructor(
    private fb: FormBuilder,
    private cookieService: CookieService,
    private basethemeService: BaseThemeService,
    private authService: AuthService, 
    private router: Router
  ) {
    this.globals = this.basethemeService.getGlobalValue();
    this.loginForm = this.fb.group({
      Username: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
    });
    console.log(this.loginForm.value);
    
    // this.model = {
    //   userName: '',
    //   pwd: ''
    // }
  }
  url: any;
  error: any;
  model: any = {};
  ngOnInit(): void {
    if (this.getCookie('key')) {
      this.model = JSON.parse(this.getCookie('key'));
    }
  }
 
  login(): void {
    this.authService.onSignIn(this.loginForm);
    this.onSubmit();
  }
  signUp() {
    this.router.navigate(['/sign-up']);
  }

  getCookie(key: string): any {
    return this.cookieService.get(key);
  }
  setCookie(key: string): void {
    this.cookieService.set('key', key);
  }
  onSubmit() {
    this.submitted = true;
    if(this.loginForm.invalid) {
      return;
    }
  }
}

// @NgModule({
//   declarations: [LoginComponent],
//   imports: [
//     CommonModule,
//     ReactiveFormsModule,
//     FormsModule,
//     RouterModule,
//     MatCheckboxModule,
//     BaseModule,
    
//   ],
//   exports: [LoginComponent],
// })
// export class SignInModule {}
