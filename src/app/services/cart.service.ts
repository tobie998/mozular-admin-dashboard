import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(protected http: HttpClient) {}

  /**
   *
   * @returns
   */
  getMyCart() {
    return this.http.get(`carUrl/cart-get-my-cart`).pipe(map((res: any) => res.content));
  }
  /**
   *
   * @param data "{\"module_id\":\"this-is-a-test-1\",\"count\":\"1\"}"
   * @returns
   */
  addCartItem(data: any) {
    return this.http.post(`carUrl/cart-add-item`, data);
  }
  /**
   *
   * @param data "{\"module_id\":\"this-is-a-test-2\"}"
   * @returns
   */
  removeCartItem(data: any) {
    return this.http.post(`carUrl/cart-remove-item`, data);
  }
  /**
   *
   * @param data "{\"coupon_code\":\"OFF10%\"}"
   */
  applyCartCoupon(data: any) {
    return this.http.post(`carUrl/cart-apply-coupon`, data);
  }
  /**
   *
   * @param data "{\"coupon_code\":\"OFF10%\"}"
   */
  removeCartCoupon(data: any) {
    return this.http.post(`carUrl/cart-remove-coupon`, data);
  }
}
