import { Component, OnInit } from '@angular/core';
import { faSeedling } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-breeding',
  templateUrl: './breeding.component.html',
  styleUrls: ['./breeding.component.scss']
})
export class BreedingComponent implements OnInit {

  faSeedling = faSeedling;

  constructor() { }

  ngOnInit(): void {
    console.log(this.faSeedling);
  }

}
