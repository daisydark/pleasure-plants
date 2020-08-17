import { Injectable } from '@angular/core';
import { Card } from '../../classes/card';
import { CardService } from '../card.service';

@Injectable({
  providedIn: 'root'
})
export class SolitaireService {

  deck: Card[] = [];

  constructor(
    public cardService: CardService
  ) { }

  generate(): void {
    this.cardService.generate(52);

    for (let i = 0; i < this.cardService.deck.length; i++) {
      const notCovered = i === 0 || i === 2 || i === 5 || i === 9 || i === 14 || i === 20 || i === 27;
      this.deck.push(
        new Card(this.cardService.deck[i], ! notCovered, false)
      );
    }
  }
}
