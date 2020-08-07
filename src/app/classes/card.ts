export class Card {
  name: string;
  covered: boolean;
  imgUrl: string;

  constructor(card, covered) {
    this.name = card;
    this.covered = covered;
    this.imgUrl = '/assets/img/cards/' + this.name + '.png';
  }

  getImgUrl(): string {
    return this.covered ? '/assets/img/cards/back.png' : this.imgUrl;
  }
}
