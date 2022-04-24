import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BaseModule } from "src/app/base/base.module";
import { MenuHeaderModule } from "src/app/layouts/menu-header/menu-header.component";
import { Globals } from "src/app/models/global/global";
import { marketplaceRoutes } from "./marketplace.routes";
import { MarketplaceComponent } from "./marketplace.component";
import { CommonModule } from "@angular/common";
import { ColorbytextPipeModule } from "src/app/utils/pipes/colorbytext.pipe";
import { ModuleDetailComponent } from './module-detail/module-detail.component';

@NgModule({
    declarations: [
        MarketplaceComponent,
        ModuleDetailComponent
    ],
    imports: [
        CommonModule,
        MenuHeaderModule,
        BaseModule,
        ColorbytextPipeModule,
        RouterModule.forChild(marketplaceRoutes)
    ],
    exports: [
        MarketplaceComponent
    ],
    providers: [ Globals ],
})
export class MarketplaceModule { }
