import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(protected http: HttpClient) { }

  /**
   *
   * @param param "{\"term\":\"\"}"
   * @returns
   */
   searchInvoices(param: any) {
    return this.http.post('corUrl/core-search-invoices', param).pipe(map((res: any) => res.content));
  }
  /**
   *
   * @param param "{\"invoice_number\":\"\"}"
   * @returns
   */
   getInvoiceInfo(param: any) {
    return this.http.get('corUrl/core-get-invoice-info', {
      params: param,
    }).pipe(map((res: any) => res.content));
  }
  /**
   *
   * @param param "{\"invoice_number\":\"C4E7EF_20211028065206031\"}"
   * @returns
   */
   confirmInvoice(param: any) {
    return this.http.post('corUrl/core-confirm-invoice', param).pipe(map((res: any) => res.content));
  }
}
