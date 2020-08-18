import { Component, OnInit, Input } from '@angular/core';
import { SolitaireService } from '../../../../services/games/solitaire.service';
import { CardService } from '../../../../services/card.service';

@Component({
  selector: 'app-draggable',
  templateUrl: './draggable.component.html',
  styleUrls: ['./draggable.component.scss']
})
export class DraggableComponent implements OnInit {

  @Input() cardIndex: number;

  constructor(
    public solitaireService: SolitaireService,
    public cardService: CardService
  ) { }

  ngOnInit(): void {
  }

}
