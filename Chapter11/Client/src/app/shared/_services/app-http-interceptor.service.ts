import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
// App import
import { AuthService } from '../../pages/auth/_services/auth.service';

@Injectable()
export class AppHttpInterceptorService implements HttpInterceptor {

  constructor(public auth: AuthService, private router: Router  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('interceptor running');
    // Get the token from auth service.
    const authToken = this.auth.getToken();

    if (authToken) {
      // Clone the request to add the new header.
      const authReq = req.clone(
        { headers: req.headers.set('Authorization', `Bearer ${authToken}`)}
      );
      console.log('interceptor running with new headers');

      // send the newly created request
      return next.handle(authReq).pipe(
        tap((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            // Response wiht HttpResponse type
            console.log('TAP function', event);

          }
        }, (err: any) => {
          console.log(err);
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              localStorage.removeItem('token');
              this.router.navigate(['/']);
            }
          }
        })
      );

    } else {
        console.log('interceptor without changes');
        return next.handle(req);
    }
  }
}
