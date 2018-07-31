import { TestBed, inject } from '@angular/core/testing';

import { AppHttpInterceptorService } from './app-http-interceptor.service';

describe('AppHttpInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppHttpInterceptorService]
    });
  });

  it('should be created', inject([AppHttpInterceptorService], (service: AppHttpInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
