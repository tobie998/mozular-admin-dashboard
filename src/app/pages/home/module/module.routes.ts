import { Routes } from "@angular/router";
import { ModuleDetailComponent } from './module-detail/module-detail.component';
import { ModuleComponent } from "./module.component";

export const moduleRoutes: Routes = [
    {
        path: '',
        component: ModuleComponent,
    },
    {
        path: 'detail/:id',
        component: ModuleDetailComponent
    },
]