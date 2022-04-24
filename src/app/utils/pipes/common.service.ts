import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CommonService {
    API_URL = environment.API_URL;
    constructor(
        private http: HttpClient
    ) { }

    listLanguage() {
        return this.http.get(`${this.API_URL}/api/language`).pipe(map((result: any) => result.Payload));
    }

    listUnit() {
        return this.http.get(`${this.API_URL}/api/unit`).pipe(map((result: any) => result.Payload));
    }

    listCurrency() {
        return this.http.get(`${this.API_URL}/api/currency`).pipe(map((result: any) => result.Payload));
    }
}
