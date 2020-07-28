import { Component, OnInit } from '@angular/core';
import { faDice } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  faDice = faDice;

  constructor() { }

  ngOnInit(): void {
  }

}
