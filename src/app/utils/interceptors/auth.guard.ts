import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router
    ) { }

    canActivate(): Observable<boolean> | boolean {
        try {
            const token = localStorage.getItem('tokenData');
            if (!token) {
                this.router.navigate(['login']);
                return false;
            }
            // if (new Date().getTime() >=
            //     new Date(access_user['.expires']).getTime()
            // ) {
            //     alert('phiên đăng nhập đã hết hạn');
            //     localStorage.clear();
            //     this.router.navigate(['login']);
            //     return false;
            // }
            return true;
        } catch (ex) {
            this.router.navigate(['login']);
            return false;
        }
    }
}
