import { TestBed, inject } from '@angular/core/testing';

import { BuildersService } from './builders.service';

describe('BuildersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuildersService]
    });
  });

  it('should be created', inject([BuildersService], (service: BuildersService) => {
    expect(service).toBeTruthy();
  }));
});
