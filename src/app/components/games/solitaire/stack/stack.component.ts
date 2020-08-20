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
    if (event.previousContainer !== event.container) {

      const currentIndex = event.previousContainer.data.length - 1;
      const targetIndex = event.container.data.length;
      const card = event.previousContainer.data[currentIndex];

      if (currentIndex) {
        const prevCard = event.previousContainer.data[currentIndex - 1];
        prevCard.cssClass = 'pointer';
      }

      if (targetIndex > 0) {
        const prevCard = event.container.data[targetIndex - 1];
        prevCard.cssClass = '';
      }

      event.previousContainer.data.pop();
      event.container.data.push(card);
      this.createMultipleStack(event.container);
    }
  }

  createMultipleStack(container): void  {
    const firstCard = null;

    const elements: Element[] = Array.from(container.element.nativeElement.childNodes);
    elements.forEach((el: Element) => {

      console.log(el);

      if (el.firstChild) {
        console.log(el.firstChild);
      }
    });

    console.log(container);
  }
}
