import { Injectable } from '@angular/core';
import { CardService } from '../card.service';
import { Card } from '../../classes/card';

@Injectable({
  providedIn: 'root'
})
export class PyramidsService {

  deck: Card[] = [];
  activeCard: Card;
  lastDiscarded = 28;

  constructor(
    protected cardService: CardService
  ) { }

  generate(): void {
    this.cardService.generate(52);

    for (let i = 0; i < this.cardService.deck.length; i++) {
      const covered = i > 20 && i < 29 ? false : true;
      this.deck.push(
        new Card(this.cardService.deck[i], covered, false)
      );
      if (i === 28) {
        this.activeCard = this.deck[i];
      }
    }
  }

  private getCardValue(card: Card): number {
    let value = card.getValue();

    switch (value) {
      case 'J':
        value = '11';
        break;
      case 'Q':
        value = '12';
        break;
      case 'K':
        value = '13';
        break;
      case 'A':
        value = '14';
        break;
    }

    return +value;
  }

  draw(): void {
    this.lastDiscarded++;
    this.deck[this.lastDiscarded].covered = false;
    this.activeCard = this.deck[this.lastDiscarded];
  }

  layDown(cardIndex, line): boolean {
    if (this.deck[cardIndex].covered === false && this.compare(this.deck[cardIndex])) {
      this.activeCard = this.deck[cardIndex];
      this.deck[cardIndex].played = true;
      if (line === 1) {

      } else {
        this.checkLine(line - 1);
      }
      return true;
    }
    return false;
  }

  private checkLine(line): void {

    switch (line) {
      case 6:
        if (this.deck[21].played && this.deck[22].played) {
          this.deck[15].covered = false;
        }
        break;
    }
  }

  private compare(card): boolean {
    const value1 = this.getCardValue(card);
    const value2 = this.getCardValue(this.activeCard);

    if (value2 + 1 === value1 || value2 - 1 === value1 || (value2 === 14 && value1 === 2) || value2 === 2 && value1 === 14) {
      return true;
    }
    return false;
  }
}
