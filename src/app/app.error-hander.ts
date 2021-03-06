import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

export class ErrorHandler {

  static handleError(error: Response | any) {
    let errorMsg: string;

    if (error instanceof Response) {
      errorMsg = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`;
    } else {
      errorMsg = error.toString();
    }
    console.log(errorMsg);
    return Observable.throw(errorMsg);
  }

}
