import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { AppConfigService } from 'src/app/services/app-config.service';
import { catchError, finalize, retry } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
@Injectable()
export class APIInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const tokenData = JSON.parse(localStorage.getItem('tokenData'));
    let token;
    if (tokenData) {
      token = tokenData.idToken.jwtToken;
    }
    let request;

    if (token && !req.url.includes('assets')) {
      if (req.method === 'PUT' && req.headers.get('Content-Type')) {
        request = req;
      } else {
        let text = req.url.substring(0, 6);
        request = req.clone({
          url: `${AppConfigService.settings[text]}/${req.url.substring(7)}`,
          setHeaders: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        });
      }
      // return next.handle(request).pipe();
      return next.handle(request).pipe(
        catchError(this.handleError),
        finalize(() => {}),
        retry(1)
      );
    } else {
      return next.handle(req);
    }
    // if (!localStorage.getItem('watting') || req.method !== 'POST' ) {
    //   request = req.clone({
    //     url: `${req.url}`,
    //     setHeaders: {
    //         Authorization: `Bearer ${token}`,
    //         'Content-Type': 'application/json',
    //     },
    //   });
    // }
    // localStorage.setItem('watting', 'yes');
    // setTimeout(() => {
    //   localStorage.removeItem('watting');
    // }, 500);
  }
  handleError = (error: HttpErrorResponse) => {
    let errorMessage = '';
    console.log(error);
    if (error.status == 401) {
      errorMessage = 'Bạn không có quyền thực hiện chức năng này';
      this.authService.onLogout();
    } else if (error.status == 500) {
      errorMessage = 'Máy chủ hiện đang lỗi, vui lòng thử lại sau';
    }
    console.log(errorMessage);

    return throwError(errorMessage);
  };
}
