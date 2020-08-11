import { Component, OnInit, Input } from '@angular/core';
import { PyramidsService } from '../../../../services/games/pyramids.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cardNumber: number;
  @Input() line: number;

  constructor(
    public pyramidsService: PyramidsService
  ) { }

  ngOnInit(): void {
  }

  layDown(cardIndex, line, $event): void {
    this.pyramidsService.layDown(cardIndex, line).then((value) => {
      $event.target.setAttribute('style', 'visibility:hidden;z-index:0');
    }).catch(() => false);
  }
}
