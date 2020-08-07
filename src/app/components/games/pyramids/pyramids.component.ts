import { Component, OnInit } from '@angular/core';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { PyramidsService } from '../../../services/games/pyramids.service';
import { CardService } from '../../../services/card.service';

@Component({
  selector: 'app-pyramids',
  templateUrl: './pyramids.component.html',
  styleUrls: ['./pyramids.component.scss']
})
export class PyramidsComponent implements OnInit {

  faQuestionCircle = faQuestionCircle;
  cards = this.pyramidsService.deck;

  constructor(
    public pyramidsService: PyramidsService,
    public cardService: CardService
  ) { }

  ngOnInit(): void {
    this.pyramidsService.generate();
  }

}
