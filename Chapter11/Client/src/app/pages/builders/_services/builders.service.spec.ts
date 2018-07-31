import { HttpClientModule } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';

// App imports
import { BuildersService } from './builders.service';
import { HttpErrorHandler } from './../../../shared/_services/http-handle-error.service';


describe('BuildersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        BuildersService,
        HttpErrorHandler
      ]
    });
  });

  it('should be created', inject([BuildersService], (service: BuildersService) => {
    expect(service).toBeTruthy();
  }));
});
