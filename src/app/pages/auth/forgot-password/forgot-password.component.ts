import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from 'src/app/models/global/global';
import { AuthService } from 'src/app/services/auth.service';
import { BaseThemeService } from 'src/app/services/base-theme.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  globals: Globals = new Globals();
  email = '';
  code = '';
  vertify = false;
  new_pass = false;
  success = false;
  textEmail = '';
  constructor(private basethemeService: BaseThemeService,private router: Router, private authService: AuthService) {
    this.globals = this.basethemeService.getGlobalValue();

   }

  ngOnInit(): void {
  }
  back() {
    if (this.vertify === true) {
      this.vertify = false;
    } else if (this.new_pass === true) {
      this.vertify = true;
      this.new_pass = false;
    } else {
      this.router.navigate(['/login']);
    }
  }
  onForgot() {
    if (this.validateEmail(this.email)) {
      this.authService.onForgot(this.email).then(() => {
        this.vertify = true;
      });
      // this.vertify = true;
    } else {

    }
    
  }
  codeCallBack(code: string) {
    this.code = code;
    this.vertify = false;
    this.new_pass = true;
  }
  confirm(password: string){
    this.authService.confirmPassword(this.email, this.code, password)
        .then(() => {
          this.success = true;
        });
  }
  validateEmail(email: string) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}
