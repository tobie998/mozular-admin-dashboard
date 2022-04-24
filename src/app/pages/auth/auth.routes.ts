import { Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const authRoutes: Routes = [
    {
        path: '',
        component: AuthComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent,
            },
            {
              path: 'sign-up',
              component: SignUpComponent
            },
            {
                path: 'confirmation',
                component: ConfirmationComponent
            },
            {
                path: 'forgot-password',
                component: ForgotPasswordComponent
            },
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full',
            }
        ],
    },
];
