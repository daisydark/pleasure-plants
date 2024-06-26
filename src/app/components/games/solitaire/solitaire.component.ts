import { Component, OnInit } from '@angular/core';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { CardService } from '../../../services/card.service';
import { SolitaireService } from '../../../services/games/solitaire.service';

@Component({
  selector: 'app-solitaire',
  templateUrl: './solitaire.component.html',
  styleUrls: ['./solitaire.component.scss']
})
export class SolitaireComponent implements OnInit {

  faQuestionCircle = faQuestionCircle;

  constructor(
    public cardService: CardService,
    public solitaireService: SolitaireService
  ) { }

  ngOnInit(): void {
    this.solitaireService.generate();
  }
}
