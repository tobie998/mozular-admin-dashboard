import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from 'src/app/models/global/global';
import { AuthService } from 'src/app/services/auth.service';
import { BaseThemeService } from 'src/app/services/base-theme.service';

@Component({
  selector: 'app-success-forgot',
  templateUrl: './success-forgot.component.html',
  styleUrls: ['./success-forgot.component.scss']
})
export class SuccessForgotComponent implements OnInit {

  globals: Globals = new Globals();
  constructor(private basethemeService: BaseThemeService, private router: Router, private authService: AuthService ) {
    this.globals = this.basethemeService.getGlobalValue();
  }

  ngOnInit(): void {
  }
  back(text) {
    this.router.navigate([text]);
  }
}
