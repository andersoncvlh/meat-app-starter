import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RadioOption } from '../shared/radio/radio-optional.model';
import { OrderService } from './order.service';
import { Order } from './order.model';
import { CartItem } from 'app/restaurants/restaurant-detail/shopping-cart/cart-item.model';
import { OrderItem } from './order-items/order-item.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  delivery = 8;

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão de Refeição', value: 'REF'}
  ];

  constructor(
    private orderService: OrderService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  itemsValue(): number {
    return this.orderService.itemsValue();
  }

  cartItems() {
    return this.orderService.cartItems();
  }

  increaseQty(item: CartItem) {
    this.orderService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.orderService.decreaseQty(item);
  }

  remove(item: CartItem) {
    this.orderService.remove(item);
  }

  checkOrder(order: Order): void {
    order.items = this.cartItems()
      .map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id) );

    this.orderService.checkOrder(order).subscribe((newOrder: Order) => {
      this.orderService.clear();
      this.router.navigate(['/order-summary']);
    });
  }

}
