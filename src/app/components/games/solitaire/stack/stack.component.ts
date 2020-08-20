import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../../../classes/card';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import { CardService } from '../../../../services/card.service';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent implements OnInit {

  @Input() stack: Card[];

  constructor(
    public cardService: CardService
  ) { }

  ngOnInit(): void {
  }

  turn(card): void {
    if (card.covered === true && card.cssClass === 'pointer') {
      card.covered = false;
    }
  }

  drop(event: CdkDragDrop<Card[]>): void {

  }

}
