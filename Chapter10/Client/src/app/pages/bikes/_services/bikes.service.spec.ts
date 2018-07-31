import { TestBed, inject } from '@angular/core/testing';

import { BikesService } from './bikes.service';

describe('BikesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BikesService]
    });
  });

  it('should be created', inject([BikesService], (service: BikesService) => {
    expect(service).toBeTruthy();
  }));
});
