
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// Application modules
import { HomeModule } from './pages/home/home.module';
import { BikesModule } from './pages/bikes/bikes.module';
import { BuildersModule } from './pages/builders/builders.module';
import { AuthModule } from './pages/auth/auth.module';
import { NavComponent } from './layout/nav/nav.component';
import { HttpErrorHandler } from './shared/_services/http-handle-error.service';

import { AppHttpInterceptorService } from './shared/_services/app-http-interceptor.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    BikesModule,
    BuildersModule,
    AuthModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    NgbModule.forRoot()
  ],
  providers: [
    Title,
    HttpErrorHandler,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptorService ,
      multi: true
    }
  ],

  bootstrap: [AppComponent],
})
export class AppModule { }
