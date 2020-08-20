import { Injectable } from '@angular/core';
import { Card } from '../../classes/card';
import { CardService } from '../card.service';

@Injectable({
  providedIn: 'root'
})
export class SolitaireService {

  stack1: Card[] = [];
  stack2: Card[] = [];
  stack3: Card[] = [];
  stack4: Card[] = [];
  stack5: Card[] = [];
  stack6: Card[] = [];
  stack7: Card[] = [];

  empty1: Card[] = [];
  empty2: Card[] = [];
  empty3: Card[] = [];
  empty4: Card[] = [];

  constructor(
    public cardService: CardService
  ) { }

  generate(): void {
    this.cardService.generate(52);

    for (let i = 0; i < this.cardService.deck.length; i++) {
      let covered = true;
      let cssClass = '';

      if (i === 0 || i === 2 || i === 5 || i === 9 || i === 14 || i === 20 || i === 27) {
        covered = false;
        cssClass = 'pointer';
      }

      if (i === 0) {
        this.stack1.push(new Card(this.cardService.deck[i], covered, false, cssClass));
      } else if (i <= 2) {
        this.stack2.push(new Card(this.cardService.deck[i], covered, false, cssClass));
      } else if (i <= 5) {
        this.stack3.push(new Card(this.cardService.deck[i], covered, false, cssClass));
      } else if (i <= 9) {
        this.stack4.push(new Card(this.cardService.deck[i], covered, false, cssClass));
      } else if (i <= 14) {
        this.stack5.push(new Card(this.cardService.deck[i], covered, false, cssClass));
      } else if (i <= 20) {
        this.stack6.push(new Card(this.cardService.deck[i], covered, false, cssClass));
      } else if (i <= 27) {
        this.stack7.push(new Card(this.cardService.deck[i], covered, false, cssClass));
      }
    }
  }


}
