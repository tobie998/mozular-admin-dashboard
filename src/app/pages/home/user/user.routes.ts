import { Routes } from "@angular/router";
import { AddUserComponent } from "./add-user/add-user.component";
import { DetailUserComponent } from "./detail-user/detail-user.component";
import { UserComponent } from "./user.component";

export const userRoutes: Routes = [
    {
        path: '',
        component: UserComponent,
    },
    {
        path: 'create',
        component: AddUserComponent
    },
    {
        path: 'detail/:id',
        component: DetailUserComponent
    },
]