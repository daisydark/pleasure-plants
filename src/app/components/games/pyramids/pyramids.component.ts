import { Component, OnInit } from '@angular/core';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { PyramidsService } from '../../../services/games/pyramids.service';
import { CardService } from '../../../services/card.service';
import { Card } from '../../../classes/card';

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
    public cardService: CardService
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

  layDown(cardIndex, line, $event): void {
    if (this.pyramidsService.layDown(cardIndex, line)) {
      $event.target.setAttribute('style', 'visibility:hidden');
    }
  }
}
