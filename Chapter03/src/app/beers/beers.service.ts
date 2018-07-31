import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/throw';
import { catchError } from 'rxjs/operators';

@Injectable()
export class BeersService {
  private url = 'https://api.punkapi.com/v2/beers?';

  constructor(private http: HttpClient) { }


/**
 * @param {page} {perpage}  Are Page number and items per page
 *
 * @example
 * service.get(1, 10) Return Page 1 with 10 Items
 *
 * @returns List of beers
 */
  get(page: number, per_page: number) {
    return this.http.get(this.url + 'page=' + page + '&per_page=' + per_page)
    .pipe(catchError(error => this.handleError(error)));
  }

  private handleError(error: HttpErrorResponse) {
    return Observable.throw(error);
  }

}
