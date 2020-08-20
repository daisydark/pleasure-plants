export class Card {
  name: string;
  covered: boolean;
  played: boolean;
  cssClass: string;
  imgUrl: string;

  constructor(card, covered, played, cssClass = 'pointer') {
    this.name = card;
    this.covered = covered;
    this.played = played;
    this.cssClass = cssClass;
    this.imgUrl = '/assets/img/cards/' + this.name + '.png';
  }

  getImgUrl(): string {
    return this.covered ? '/assets/img/cards/back.png' : this.imgUrl;
  }

  getValue(): string {
    return this.name.substring(0, 2) === '10' ? '10' : this.name.substring(0, 1);
  }
}
