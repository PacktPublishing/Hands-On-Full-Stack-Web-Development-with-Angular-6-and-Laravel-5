import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

// App import
import { environment } from '../../../../environments/environment';
import { Bike } from '../bike';
import { HttpErrorHandler, HandleError } from '../../../shared/_services/http-handle-error.service';

@Injectable({
  providedIn: 'root'
})
export class BikesService {
  private readonly apiUrl = environment.apiUrl;
  private bikesUrl = this.apiUrl + '/bikes';
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler ) {
      this.handleError = httpErrorHandler.createHandleError('BikesService');
    }

  /** GET bikes from bikes endpoint */
  getBikes (): Observable<Bike[]> {
    return this.http.get<Bike[]>(this.bikesUrl)
      .pipe(
        catchError(this.handleError('getBikes', []))
      );
  }

  /** GET bike detail from bike-detail endpoint */
  getBikeDetail (id: number): Observable<Bike[]> {
    return this.http.get<Bike[]>(this.bikesUrl + `/${id}`)
      .pipe(
        catchError(this.handleError('getBikeDetail', []))
      );
  }

  /** POST bike to bikes endpoint */
  addBike (bike: Bike): Observable<Bike> {
    return this.http.post<Bike>(this.bikesUrl, bike)
      .pipe(
        catchError(this.handleError('addBike', bike))
      );
  }

  /** PUT bike to bikes endpoint */
  updateBike (id: number, bike: Bike): Observable<Bike> {
    return this.http.put<Bike>(this.bikesUrl + `/${id}`, bike)
      .pipe(
        catchError(this.handleError('updateBike', bike))
      );
  }

  /** DELETE bike bike endpoint */
  deleteBike (id: number): Observable<any> {
    return this.http.delete<Bike>(this.bikesUrl + `/${id}`)
      .pipe(
        catchError(this.handleError('deleteBike'))
      );
  }

  /** Vote on bike */
  voteOnBike (vote: number, bike: number): Observable<any> {
    const rating = vote;
    return this.http.post(this.bikesUrl + `/${bike}/ratings`, {rating})
      .pipe(
        catchError(this.handleError('voteOnBike', []))
      );
  }
}
