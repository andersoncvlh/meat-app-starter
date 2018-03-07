import { Injectable } from '@angular/core';

import { Restaurant } from './restaurant/restaurant.model';

@Injectable()
export class RestaurantsService {

  constructor() { }

  restaurants(): Restaurant[] {
    return [
      {
        id: '1',
        name: 'Bread & Bakery',
        category: 'Bakery',
        deliveryEstimate: '25min',
        imagePath: 'assets/img/restaurants/breadbakery.png',
        rating: 4.5
      },
      {
        id: '2',
        name: 'Burger House',
        category: 'Hamburguers',
        deliveryEstimate: '100min',
        imagePath: 'assets/img/restaurants/burgerhouse.png',
        rating: 4.5
      }
    ];
  }

}
