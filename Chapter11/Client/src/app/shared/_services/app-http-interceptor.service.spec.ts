import { HttpClientModule } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

// App imports
import { AppHttpInterceptorService } from './app-http-interceptor.service';

describe('AppHttpInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      providers: [AppHttpInterceptorService]
    });
  });

  it('should be created', inject([AppHttpInterceptorService], (service: AppHttpInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
