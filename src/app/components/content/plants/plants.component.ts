import {Component, Input, OnInit} from '@angular/core';
import { Plant } from "../../../interfaces/plant";
import { PlantService } from "../../../plant.service";

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.scss']
})
export class PlantsComponent implements OnInit {
  plants: Plant[] = [];

  constructor(
    private plantService: PlantService
  ) { }

  ngOnInit(): void {
    this.getPlants();
  }

  getPlants() {
    this.plantService.getPlants().subscribe(plants => this.plants = plants);
  }

}
