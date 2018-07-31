import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

// App imports
import { BikesService } from './bikes.service';
import { HttpErrorHandler } from '../../../shared/_services/http-handle-error.service';

describe('BikesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        BikesService,
        HttpErrorHandler
      ]
    });
  });

  it('should be created', inject([BikesService], (service: BikesService) => {
    expect(service).toBeTruthy();
  }));
});
