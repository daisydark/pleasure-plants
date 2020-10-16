import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './components/account/settings/settings.component';
import { PlantsComponent } from './components/content/plants/plants.component';
import { BreedingComponent } from './components/interactive/breeding/breeding.component';
import {GamesComponent} from './components/content/games/games.component';
import {YahtzeeComponent} from './components/games/yahtzee/yahtzee.component';
import {PyramidsComponent} from './components/games/pyramids/pyramids.component';
import { SolitaireComponent } from './components/games/solitaire/solitaire.component';

const routes: Routes = [
  { path: 'account/settings', component: SettingsComponent },
  { path: 'breeding', component: PlantsComponent },
  { path: 'my-breeding', component: BreedingComponent },
  { path: 'games', component: GamesComponent },
  { path: 'games/yahtzee', component: YahtzeeComponent },
  { path: 'games/solitaire', component: SolitaireComponent },
  { path: 'games/pyramids', component: PyramidsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
