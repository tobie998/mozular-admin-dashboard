import { Routes } from "@angular/router";
import { MarketplaceComponent } from "./marketplace.component";
import { ModuleDetailComponent } from "./module-detail/module-detail.component";

export const marketplaceRoutes: Routes = [
    {
        path: '',
        component: MarketplaceComponent,
    },
    {
        path: 'detail/:id',
        component: ModuleDetailComponent
    },
]