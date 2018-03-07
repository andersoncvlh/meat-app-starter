import { MEAT_APP } from './../app.api';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Restaurant } from './restaurant/restaurant.model';
import { Http } from '@angular/http';

@Injectable()
export class RestaurantsService {

  constructor(private http: Http) {}

  restaurants(): Observable<Restaurant[]> {
    return this.http.get(`${MEAT_APP}/restaurants`)
      .map(response => response.json());
  }

}
