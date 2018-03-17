import { Injectable } from '@angular/core';

import { MenuItem } from './../menu/menu-item/menu-item.model';
import { CartItem } from './cart-item.model';

@Injectable()
export class ShoppingCartService {

  items: CartItem[] = [];

  clear() {
    this.items = [];
  }

  addItem(menuItem: MenuItem) {
    let foundItem = this.items.find((mItem) => mItem.menuItem.id === menuItem.id);
    if (foundItem) {
      this.increaseQty(foundItem);
    } else {
      this.items.push(new CartItem(menuItem));
    }

  }

  removeItem(cartItem: CartItem) {
    this.items.splice(this.items.indexOf(cartItem), 1);
  }

  total(): number {
    return this.items
      .map(item => item.value())
      .reduce((prev, value) => prev + value, 0);
  }

  increaseQty(item: CartItem) {
    item.quantity = item.quantity + 1;
  }

  decreaseQty(item: CartItem) {
    item.quantity = item.quantity - 1;
    if (item.quantity === 0) {
      this.removeItem(item);
    }
  }

}
