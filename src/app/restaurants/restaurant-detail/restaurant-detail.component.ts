import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Restaurant } from './../restaurant/restaurant.model';
import { RestaurantsService } from '../restaurants.service';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant;

  constructor(
    private route: ActivatedRoute,
    private restaurantsService: RestaurantsService
  ) { }

  ngOnInit() {
    this.restaurantsService.restaurantById(this.route.snapshot.params['id'])
      .subscribe(restaurant => this.restaurant = restaurant);
  }

}
