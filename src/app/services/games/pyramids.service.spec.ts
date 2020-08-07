import { TestBed } from '@angular/core/testing';

import { PyramidsService } from './pyramids.service';

describe('PyramidsService', () => {
  let service: PyramidsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PyramidsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
