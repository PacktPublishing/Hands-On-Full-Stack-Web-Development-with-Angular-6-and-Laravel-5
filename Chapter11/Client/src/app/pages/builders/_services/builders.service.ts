import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

// App import
import { environment } from '../../../../environments/environment';
import { Builder } from '../builder';
import { HttpErrorHandler, HandleError } from '../../../shared/_services/http-handle-error.service';

@Injectable({
  providedIn: 'root'
})
export class BuildersService {
  private readonly apiUrl = environment.apiUrl;
  private buildersUrl = this.apiUrl + '/builders';
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler ) {
      this.handleError = httpErrorHandler.createHandleError('BuildersService');
     }

  /** GET builders from builders endpoint */
  getBuilders (): Observable<Builder[]> {
    return this.http.get<Builder[]>(this.buildersUrl)
      .pipe(
        catchError(this.handleError('getBuilders', []))
      );
  }

  /** GET builder detail from builder-detail endpoint */
  getBuilderDetail (id: number): Observable<Builder[]> {
    return this.http.get<Builder[]>(this.buildersUrl + `/${id}`)
      .pipe(
        catchError(this.handleError('getBuilderDetail', []))
      );
  }

  /** POST builder to builders endpoint */
  addBuilder (builder: Builder): Observable<Builder> {
    return this.http.post<Builder>(this.buildersUrl, builder)
      .pipe(
        catchError(this.handleError('addBuilder', builder))
      );
  }

  /** PUT builder to builders endpoint */
  updateBuilder (builder: Builder, id: number): Observable<Builder> {
    return this.http.put<Builder>(this.buildersUrl + `/${id}`, builder)
      .pipe(
        catchError(this.handleError('updateBuilder', builder))
      );
  }

  /** DELETE builder builder endpoint */
  deleteBuilder (id: number): Observable<any> {
    return this.http.delete<Builder[]>(this.buildersUrl + `/${id}`)
      .pipe(
        catchError(this.handleError('deleteBuilder'))
      );
  }
}
