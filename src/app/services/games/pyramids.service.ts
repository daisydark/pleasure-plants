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
  cardsLeft = 23;
  points = 0;

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
    this.cardsLeft--;
  }

  layDown(cardIndex, line): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this.deck[cardIndex].covered === false && this.compare(this.deck[cardIndex])) {
        this.activeCard = this.deck[cardIndex];
        this.deck[cardIndex].played = true;
        if (line === 1) {

        } else {
          this.checkLine(line - 1);
        }
        resolve(1);
      } else {
        reject(1);
      }
    });
  }

  private checkLine(line): void {

    switch (line) {
      case 6:
        if (this.deck[21].played && this.deck[22].played) {
          this.deck[15].covered = false;
        }
        if (this.deck[22].played && this.deck[23].played) {
          this.deck[16].covered = false;
        }
        if (this.deck[23].played && this.deck[24].played) {
          this.deck[17].covered = false;
        }
        if (this.deck[24].played && this.deck[25].played) {
          this.deck[18].covered = false;
        }
        if (this.deck[25].played && this.deck[26].played) {
          this.deck[19].covered = false;
        }
        if (this.deck[26].played && this.deck[27].played) {
          this.deck[20].covered = false;
        }
        break;
      case 5:
        if (this.deck[15].played && this.deck[16].played) {
          this.deck[10].covered = false;
        }
        if (this.deck[16].played && this.deck[17].played) {
          this.deck[11].covered = false;
        }
        if (this.deck[17].played && this.deck[18].played) {
          this.deck[12].covered = false;
        }
        if (this.deck[18].played && this.deck[19].played) {
          this.deck[13].covered = false;
        }
        if (this.deck[19].played && this.deck[20].played) {
          this.deck[14].covered = false;
        }
        break;
      case 4:
        if (this.deck[10].played && this.deck[11].played) {
          this.deck[6].covered = false;
        }
        if (this.deck[11].played && this.deck[12].played) {
          this.deck[7].covered = false;
        }
        if (this.deck[12].played && this.deck[13].played) {
          this.deck[8].covered = false;
        }
        if (this.deck[13].played && this.deck[14].played) {
          this.deck[9].covered = false;
        }
        break;
      case 3:
        if (this.deck[6].played && this.deck[7].played) {
          this.deck[3].covered = false;
        }
        if (this.deck[7].played && this.deck[8].played) {
          this.deck[4].covered = false;
        }
        if (this.deck[8].played && this.deck[9].played) {
          this.deck[5].covered = false;
        }
        break;
      case 2:
        if (this.deck[3].played && this.deck[4].played) {
          this.deck[1].covered = false;
        }
        if (this.deck[4].played && this.deck[5].played) {
          this.deck[2].covered = false;
        }
        break;
      case 1:
        if (this.deck[1].played && this.deck[2].played) {
          this.deck[0].covered = false;
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
