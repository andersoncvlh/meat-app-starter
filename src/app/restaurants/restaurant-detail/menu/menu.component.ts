import { MenuItem } from './menu-item/menu-item.model';
import { Observable } from 'rxjs/Observable';
import { RestaurantsService } from './../../restaurants.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>;

  constructor(
    private route: ActivatedRoute,
    private restaurantsService: RestaurantsService
  ) { }

  ngOnInit() {
    this.menu = this.restaurantsService
      .menuOfRestaurant(this.route.parent.snapshot.params['id']);
  }

}
