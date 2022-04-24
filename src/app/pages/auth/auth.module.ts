import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { authRoutes } from './auth.routes';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SuccessForgotComponent } from './success-forgot/success-forgot.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [
        AuthComponent,
        SignUpComponent,
        LoginComponent,
        ConfirmationComponent,
        ForgotPasswordComponent,
        SuccessForgotComponent,
        NewPasswordComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        RouterModule.forChild(authRoutes),
    ],
    providers: [],
})
export class AuthModule { }
