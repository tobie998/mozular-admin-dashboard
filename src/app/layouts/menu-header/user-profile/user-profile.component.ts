import { CommonModule } from '@angular/common';
import { Component, EventEmitter, NgModule, OnInit, Output } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { LocalStorageService } from 'src/app/services/localstorage.service';
import { Subscription } from 'rxjs';
import { SendDataService } from 'src/app/services/send-data.service';
// import { CompanyService } from 'src/app/services/company.service';
@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
    @Output() callBack = new EventEmitter();
    data = {
        name: '',
        title: '',
        img: 'assets/svg/avatar.svg',
    };

    constructor(
      private localStorageService: LocalStorageService, private sendDataService: SendDataService,) { }
    subscription: Subscription;
    ngOnInit(): void {
      const user = this.localStorageService.get('access_user');
      this.data = {
        name: user.FirstName + ' ' + user.LastName,
        title:  user.Role,
        img: ''
      };
      this.subscription = this.sendDataService.currentMessage.subscribe(res => {
        if (res && res !== 'default message') {
          const companyDetal = JSON.parse(res);
          this.data.img = companyDetal.MediaURL;
          // this.getCompany();
        }
      });
      this.getCompany();
    }
    getCompany(): void {
      // this.service.detail().subscribe(res => {
      //   const  companyDetal = res;
      //   this.data.img = companyDetal.MediaURL;
      // });
    }
}

@NgModule({
    declarations: [UserProfileComponent],
    imports: [
        CommonModule,
        RouterModule,
        MatMenuModule,
        MatIconModule
    ],
    exports: [UserProfileComponent],
})
export class UserProfileModule { }
