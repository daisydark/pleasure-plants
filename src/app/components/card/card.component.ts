import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() suits: string;
  @Input() number: string;

  class: string;

  constructor() { }

  ngOnInit(): void {
  }

  getClass(): string {
    let addClass = '';

    switch (this.suits) {
      case 'diamonds':
        addClass = 'diamond ';
        break;
      case 'hearts':
        addClass = 'heart ';
    }

    switch (this.number) {
      case '2':
        return addClass + 'two';
      case '3':
        return addClass + 'three';
      case '4':
        return addClass + 'four';
      case '5':
        return addClass + 'five';
      case '6':
        return addClass + 'six';
      case '7':
        return addClass + 'seven';
      case '8':
        return addClass + 'eight';
      case '9':
        return addClass + 'nine';
      case '10':
        return addClass + 'ten';
      case 'J':
        return addClass + 'jack';
      case 'Q':
        return addClass + 'queen';
      case 'K':
        return addClass + 'king';
      case 'A':
        return addClass + 'ace';
    }
  }


}
