import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ShoppingCartService } from '../restaurants/restaurant-detail/shopping-cart/shopping-cart.service';
import { CartItem } from '../restaurants/restaurant-detail/shopping-cart/cart-item.model';
import { Order } from './order.model';
import { MEAT_APP } from './../app.api';
import { ErrorHandler } from './../app.error-hander';

/**
 * @author Anderson C. Martins
 * responsible for order flow
 */
@Injectable()
export class OrderService {

  constructor(
    private shoppingCartService: ShoppingCartService,
    private http: Http
  ) { }

  cartItems(): CartItem[] {
    return this.shoppingCartService.items;
  }

  increaseQty(item: CartItem) {
    this.shoppingCartService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.shoppingCartService.decreaseQty(item);
  }
  remove(item: CartItem) {
    this.shoppingCartService.removeItem(item);
  }

  itemsValue(): number {
    return this.shoppingCartService.total();
  }

  clear(): void {
    this.shoppingCartService.clear();
  }

  /**
   * @param order
   * @returns new order
   */
  checkOrder(order: Order): Observable<Order> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${MEAT_APP}/orders`,
                    JSON.stringify(order),
                    new RequestOptions({headers}))
      .map(response => response.json())
      .catch(error => ErrorHandler.handleError(error));
  }

}
