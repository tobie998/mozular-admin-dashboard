import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  constructor(protected http: HttpClient) {}

  /**
   *
   * @param param "{\"term\":\"this-is\"}"
   * @returns
   */
  searchMarketModules(param: any) {
    return this.http.post(`modUrl/market-search-modules`, param).pipe(map((res: any) => res.content));
  }
  /**
   *
   * @param param "{\"module_id\":\"this-is-a-test-1\"}"
   * @returns
   */
  getMarketModules(param: any) {
    return this.http.get(`modUrl/market-get-module-info`, {
      params: param,
    }).pipe(map((res: any) => res.content));
  }
  /**
   *
   * @returns
   */
  getMyModule() {
    return this.http.get(`modUrl/modules-get-my-modules`).pipe(map((res: any) => res.content));
  }
}
