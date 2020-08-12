import { Component, OnInit } from '@angular/core';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { PyramidsService } from '../../../services/games/pyramids.service';
import { CardService } from '../../../services/card.service';
import { Card } from '../../../classes/card';
import {TranslateService} from '@ngx-translate/core';
import {YahtzeeService} from '../../../services/games/yahtzee.service';
import {toArray} from 'rxjs/operators';

@Component({
  selector: 'app-pyramids',
  templateUrl: './pyramids.component.html',
  styleUrls: ['./pyramids.component.scss']
})
export class PyramidsComponent implements OnInit {

  faQuestionCircle = faQuestionCircle;
  showDeck = true;

  constructor(
    public pyramidsService: PyramidsService,
    public cardService: CardService,
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.newGame();
  }

  draw(): void {
    this.pyramidsService.draw();
    if (this.pyramidsService.lastDiscarded === 51) {
      this.showDeck = false;
    }
  }
  getCardsLeft(): string {
    return '' + this.pyramidsService.cardsLeft;
  }

  getPoints(): string {
    return '' + this.pyramidsService.points;
  }

  newGame(): void {
    this.reset();
    this.pyramidsService.reset();
    this.pyramidsService.generate();
  }

  reset(): void {
    const images: Element[] = Array.from(document.getElementsByClassName('playcard'));
    images.forEach((el: Element) => {
      el.setAttribute('style', 'visibility:visible;z-index:1');
    });
    this.showDeck = true;
  }

}
