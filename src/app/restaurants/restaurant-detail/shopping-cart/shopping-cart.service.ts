import { MenuItem } from './../menu/menu-item/menu-item.model';
import { CartItem } from './cart-item.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingCartService {

  items: CartItem[] = [];

  clear() {
    this.items = [];
  }

  addItem(menuItem: MenuItem) {
    let foundItem = this.items.find((mItem) => mItem.menuItem.id === menuItem.id);
    if (foundItem) {
      foundItem.quantity = foundItem.quantity + 1;
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

}
