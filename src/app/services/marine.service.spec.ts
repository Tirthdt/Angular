import { TestBed, inject } from '@angular/core/testing';

import { MarineService } from './marine.service';

describe('MarineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarineService]
    });
  });

  it('should be created', inject([MarineService], (service: MarineService) => {
    expect(service).toBeTruthy();
  }));
});
