import { TestBed } from '@angular/core/testing';

import { PqrsdService } from './pqrsd.service';

describe('PqrsdService', () => {
  let service: PqrsdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PqrsdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
