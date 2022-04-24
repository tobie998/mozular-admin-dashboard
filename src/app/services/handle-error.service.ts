import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
@Injectable({
    providedIn: 'root'
})

export class HandleErrorService {

    constructor(
    ) { }

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