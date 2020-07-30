import { TestBed } from '@angular/core/testing';

import { YahtzeeService } from './yahtzee.service';

describe('YahtzeeService', () => {
  let service: YahtzeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YahtzeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
