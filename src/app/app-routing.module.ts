import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlantsComponent } from "./components/content/plants/plants.component";
import { BreedingComponent } from "./components/interactive/breeding/breeding.component";
import {GamesComponent} from "./components/content/games/games.component";
import {YahtzeeComponent} from "./components/games/yahtzee/yahtzee.component";
import {PyramidsComponent} from './components/games/pyramids/pyramids.component';

const routes: Routes = [
  { path: 'breeding', component: PlantsComponent },
  { path: 'my-breeding', component: BreedingComponent },
  { path: 'games', component: GamesComponent },
  { path: 'games/yahtzee', component: YahtzeeComponent },
  { path: 'games/pyramids', component: PyramidsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
