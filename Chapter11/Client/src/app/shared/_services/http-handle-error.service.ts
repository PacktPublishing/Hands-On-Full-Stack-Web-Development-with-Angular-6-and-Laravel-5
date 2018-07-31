import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

/** HandleError Type  */
export type HandleError =
  <T> (operation?: string, result?: T) => (error: HttpErrorResponse) => Observable<T>;

@Injectable()
export class HttpErrorHandler {

  constructor() { }

  /** Pass the service name to map errors */
  createHandleError = (serviceName = '') => <T>
    (operation = 'operation', result = {} as T) => this.handleError(serviceName, operation, result)

  handleError<T> (serviceName = '', operation = 'operation', result = {} as T) {

    return (response: HttpErrorResponse): Observable<T> => {
      // Optionally send the error to a third part error logging service
      console.error(response);

      // Show a simple alert if error
      const message = (response.error instanceof ErrorEvent) ?
        response.error.message :
       `server returned code ${response.status} with body "${response.error.error}"`;

      // We are using alert just for example, on real world avoid this pratice
      alert(message);

      // Keep running and returning a safe result.
      return of( result );
    };

  }
}
