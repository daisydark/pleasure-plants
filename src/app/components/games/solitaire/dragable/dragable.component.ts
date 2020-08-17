import { Component, OnInit, Input } from '@angular/core';
import { SolitaireService } from '../../../../services/games/solitaire.service';
import { CardService } from '../../../../services/card.service';

@Component({
  selector: 'app-dragable',
  templateUrl: './dragable.component.html',
  styleUrls: ['./dragable.component.scss']
})
export class DragableComponent implements OnInit {

  @Input() cardIndex: number;

  constructor(
    public solitaireService: SolitaireService,
    public cardService: CardService
  ) { }

  ngOnInit(): void {
  }

}
