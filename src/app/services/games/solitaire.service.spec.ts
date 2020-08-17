import { TestBed } from '@angular/core/testing';

import { SolitaireService } from './solitaire.service';

describe('SolitaireService', () => {
  let service: SolitaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolitaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
