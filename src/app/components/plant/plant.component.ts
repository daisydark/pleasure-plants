import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { Plant } from "../../interfaces/plant";

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.scss']
})
export class PlantComponent implements OnInit {
  @Input() plant: Plant;

  constructor() { }

  ngOnInit(): void {
  }
}
