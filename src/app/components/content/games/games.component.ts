import { Component, OnInit } from '@angular/core';
import { faDice, faCrown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  faDice = faDice;
  faCrown = faCrown;
  faCaretUp = faCaretUp;

  constructor() { }

  ngOnInit(): void {
  }

}
