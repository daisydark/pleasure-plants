import { Component, OnInit } from '@angular/core';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { PyramidsService } from '../../../services/games/pyramids.service';
import { CardService } from '../../../services/card.service';
import { Card } from '../../../classes/card';
import {TranslateService} from '@ngx-translate/core';
import {YahtzeeService} from '../../../services/games/yahtzee.service';

@Component({
  selector: 'app-pyramids',
  templateUrl: './pyramids.component.html',
  styleUrls: ['./pyramids.component.scss']
})
export class PyramidsComponent implements OnInit {

  faQuestionCircle = faQuestionCircle;
  showDeck = true;
  showMessage = true;

  constructor(
    public pyramidsService: PyramidsService,
    public cardService: CardService,
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.pyramidsService.generate();
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

  }

}
