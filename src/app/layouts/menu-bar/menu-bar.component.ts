import { CommonModule } from '@angular/common';
import { Component, EventEmitter, NgModule, OnInit, Output } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Subscription } from 'rxjs';
import { Globals } from 'src/app/models/global/global';
import { BaseThemeService } from 'src/app/services/base-theme.service';
import { SendDataService } from 'src/app/services/send-data.service';
@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {
  @Output() callBacck = new EventEmitter();
  globals: Globals = new Globals();
  menu = false;
  listNav = [];
  subscription: Subscription;
  constructor(
    private sendDataService: SendDataService, 
    private basethemeService: BaseThemeService
  ) {  }

  companyDetal: any;
  ngOnInit(): void {
    this.globals = this.basethemeService.getGlobalValue();
    this.updateNar();
    this.basethemeService.currentMessage.subscribe(data => {
      if (data && data !== 'default message') { 
        setTimeout(() => {
          console.log(this.globals, this.listNav);
          this.updateNar();
        }, 100);
      }
    })
    // this.subscription = this.sendDataService.currentMessage.subscribe(data => {
    //   if (data && data !== 'default message') {
    //     const dataConvert = JSON.parse(data);
    //     if (dataConvert && dataConvert.type && dataConvert.type === 'nar') {
    //       this.listNav = dataConvert.ListNav;
    //     } else {
    //       this.companyDetal = JSON.parse(data);
    //     }
    //     setTimeout(() => {
    //       console.log(this.globals, this.listNav);
          
    //     }, 100);
    //     // this.getCompany();
    //   }
    // });
    // this.getCompany();
  }
  getCompany(): void {
    // this.service.detail().subscribe(res => {
    //   this.companyDetal = res;
    // });
  }
  updateNar() {
    this.listNav = [
      {
        icon: `${this.globals.urlFolder}svg/receipt.svg`,
        iconActive: `${this.globals.urlFolder}svg/receiptActive.svg`,
        name: 'Hóa đơn',
        router: '/payment'
      },
    ];
  }
  toggerMenu() {
    this.menu = !this.menu;
    this.callBacck.emit(this.menu);
  }
}

@NgModule({
  declarations: [
    MenuBarComponent
  ],
  providers: [ Globals ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [MenuBarComponent, RouterModule]
})
export class MenuBarModule { }
