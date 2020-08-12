import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  deck = [
    '7C', '7D', '7H', '7S',
    '8C', '8D', '8H', '8S',
    '9C', '9D', '9H', '9S',
    '10C', '10D', '10H', '10S',
    'JC', 'JD', 'JH', 'JS',
    'QC', 'QD', 'QH', 'QS',
    'KC', 'KD', 'KH', 'KS',
    'AC', 'AD', 'AH', 'AS'
  ];
  protected  deck52 = [
    '2C', '2D', '2H', '2S',
    '3C', '3D', '3H', '3S',
    '4C', '4D', '4H', '4S',
    '5C', '5D', '5H', '5S',
    '6C', '6D', '6H', '6S'
  ];

  constructor() { }

  generate(cardDeck: number): void {
    if (cardDeck === 52) {
      this.deck = this.deck.concat(this.deck52);
    }
    this.shuffle();
  }

  shuffle(): void {
    let currentIndex = this.deck.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = this.deck[currentIndex];
      this.deck[currentIndex] = this.deck[randomIndex];
      this.deck[randomIndex] = temporaryValue;
    }
  }

  getBackImgUrl(): string {
    return '/assets/img/cards/back.png';
  }

  reset(): void {
    this.deck = [
      '7C', '7D', '7H', '7S',
      '8C', '8D', '8H', '8S',
      '9C', '9D', '9H', '9S',
      '10C', '10D', '10H', '10S',
      'JC', 'JD', 'JH', 'JS',
      'QC', 'QD', 'QH', 'QS',
      'KC', 'KD', 'KH', 'KS',
      'AC', 'AD', 'AH', 'AS'
    ];
  }
}
