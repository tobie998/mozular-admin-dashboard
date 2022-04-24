import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReadJsonService {

   constructor(private http: HttpClient) {
        // this.getJSON().subscribe(data => {
        //     console.log(data);
        // });
    }

    public getJSON(url = './assets/json/theme1.json'): Observable<any> {
        return this.http.get(url);
    }
}
