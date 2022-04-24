import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BaseModule } from "src/app/base/base.module";
import { MenuHeaderModule } from "src/app/layouts/menu-header/menu-header.component";
import { Globals } from "src/app/models/global/global";
import { moduleRoutes } from "./module.routes";
import { ModuleComponent } from "./module.component";
import { ExpiredModuleComponent } from './expired-module/expired-module.component';
import { ActiveModuleComponent } from './active-module/active-module.component';
import { CommonModule } from "@angular/common";
import { ColorbytextPipeModule } from "src/app/utils/pipes/colorbytext.pipe";
import { ModuleDetailComponent } from './module-detail/module-detail.component';

@NgModule({
    declarations: [
        ModuleComponent,
        ExpiredModuleComponent,
        ActiveModuleComponent,
        ModuleDetailComponent
    ],
    imports: [
        MenuHeaderModule,
        CommonModule,
        BaseModule,
        ColorbytextPipeModule,
        RouterModule.forChild(moduleRoutes)
    ],
    exports: [
        ModuleComponent,
        ExpiredModuleComponent,
        ActiveModuleComponent
    ],
    providers: [ Globals ],
})
export class ModuleModule { }
