import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BaseModule } from "src/app/base/base.module";
import { MenuHeaderModule } from "src/app/layouts/menu-header/menu-header.component";
import { Globals } from "src/app/models/global/global";
import { settingRoutes } from "./setting.routes";
import { SettingComponent } from "./setting.component";

@NgModule({
    declarations: [
        SettingComponent
    ],
    imports: [
        MenuHeaderModule,
        BaseModule,
        RouterModule.forChild(settingRoutes)
    ],
    exports: [
        SettingComponent
    ],
    providers: [ Globals ],
})
export class SettingModule { }
