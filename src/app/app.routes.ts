import { Routes } from '@angular/router';
import { AuthGuard } from './utils/interceptors/auth.guard';

export const appRoutes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./pages/auth/auth.module').then((m) => m.AuthModule),
    },
    {
        path: '',
        canActivate: [AuthGuard],
        loadChildren: () =>
            import('./pages/home/home.module').then((m) => m.HomeModule),
    }

];
