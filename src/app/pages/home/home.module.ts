import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuBarModule } from 'src/app/layouts/menu-bar/menu-bar.component';
import { MenuHeaderModule } from 'src/app/layouts/menu-header/menu-header.component';
import { HomeComponent } from './home.component';
import { homeRoutes } from './home.routes';
// import { UserComponent } from './user/user.component';
// import { ModuleComponent } from './module/module.component';
// import { PaymentComponent } from './payment/payment.component';
// import { SettingComponent } from './setting/setting.component';
@NgModule({
    declarations: [HomeComponent],
    imports: [
        RouterModule.forChild(homeRoutes),
        CommonModule,
        MenuBarModule,
        MenuHeaderModule
    ],
    providers: [],
})
export class HomeModule { }
