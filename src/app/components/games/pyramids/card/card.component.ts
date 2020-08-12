import { Component, OnInit, Input } from '@angular/core';
import { PyramidsService } from '../../../../services/games/pyramids.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cardIndex: number;

  constructor(
    public pyramidsService: PyramidsService
  ) { }

  ngOnInit(): void {
  }

  layDown(cardIndex, $event): void {
    if (this.pyramidsService.layDown(cardIndex)) {
      $event.target.setAttribute('style', 'visibility:hidden;z-index:0');
    }
  }
}
