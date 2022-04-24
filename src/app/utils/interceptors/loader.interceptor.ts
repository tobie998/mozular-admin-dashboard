import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { LoaderService } from "src/app/services/loader.service";
@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
    constructor(
        private LoaderService: LoaderService
    ) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.LoaderService.show()
        return next.handle(req).pipe(
            finalize(() => this.LoaderService.hide())
        );
    }
}

