import { Injectable } from '@angular/core';
import { CardService } from '../card.service';
import { Card } from '../../classes/card';

@Injectable({
  providedIn: 'root'
})
export class PyramidsService {

  deck: Card[] = [];

  constructor(
    protected cardService: CardService
  ) { }

  generate(): void {
    this.cardService.generate(52);

    for (let i = 0; i < this.cardService.deck.length; i++) {
      const covered = i > 20 && i < 29 ? false : true;
      this.deck.push(
        new Card(this.cardService.deck[i], covered)
      );
    }
  }
}
