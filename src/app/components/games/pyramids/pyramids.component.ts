import { Component, OnInit } from '@angular/core';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pyramids',
  templateUrl: './pyramids.component.html',
  styleUrls: ['./pyramids.component.scss']
})
export class PyramidsComponent implements OnInit {

  faQuestionCircle = faQuestionCircle;

  cards = [];

  constructor() { }

  ngOnInit(): void {
    this.cards.push('back');
    this.cards.push('back');
    this.cards.push('back');
    this.cards.push('back');
    this.cards.push('back');
  }

}
