import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SendDataService {
  private dataSource = new BehaviorSubject('default message');
  currentMessage = this.dataSource.asObservable();

  constructor() { }

  changeData(data: any): void {
    this.dataSource.next(data);
  }

}
