import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../../../classes/card';
import {CdkDragDrop} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.scss']
})
export class EmptyComponent implements OnInit {

  @Input() stack: Card[];

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<Card[]>): void {

    if (event.previousContainer !== event.container) {

      const currentIndex = event.previousContainer.data.length - 1;
      const card = event.previousContainer.data[currentIndex];

      if (currentIndex) {
        const prevCard = event.previousContainer.data[currentIndex - 1];
        prevCard.cssClass = 'pointer';


      }

      event.previousContainer.data.pop();
      event.container.data.push(card);
    }
  }

}
