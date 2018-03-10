import { MEAT_APP } from './../app.api';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Restaurant } from './restaurant/restaurant.model';
import { Http } from '@angular/http';
import { ErrorHandler } from './../app.error-hander';

@Injectable()
export class RestaurantsService {

  constructor(private http: Http) {}

  restaurants(): Observable<Restaurant[]> {
    return this.http.get(`${MEAT_APP}/restaurants`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }

}
