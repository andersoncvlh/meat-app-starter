import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {


  restaurants: Restaurant[] = [
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

  constructor() { }

  ngOnInit() {
  }

}
