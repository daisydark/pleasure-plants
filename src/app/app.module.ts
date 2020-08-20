import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { ReactiveFormsModule } from '@angular/forms';

import { PlantsComponent } from './components/content/plants/plants.component';
import { PlantComponent } from './components/plant/plant.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { BreedingComponent } from './components/interactive/breeding/breeding.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { YahtzeeComponent } from './components/games/yahtzee/yahtzee.component';
import { GamesComponent } from './components/content/games/games.component';
import { ReplacePipe } from './pipes/replace.pipe';
import { PyramidsComponent } from './components/games/pyramids/pyramids.component';
import { CardComponent } from './components/games/pyramids/card/card.component';
import { SolitaireComponent } from './components/games/solitaire/solitaire.component';
import { MenuComponent } from './components/layout/menu/menu.component';
import { StackComponent } from './components/games/solitaire/stack/stack.component';
import { EmptyComponent } from './components/games/solitaire/empty/empty.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantsComponent,
    PlantComponent,
    HeaderComponent,
    FooterComponent,
    BreedingComponent,
    YahtzeeComponent,
    GamesComponent,
    ReplacePipe,
    PyramidsComponent,
    CardComponent,
    SolitaireComponent,
    MenuComponent,
    StackComponent,
    EmptyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    FontAwesomeModule,
    ReactiveFormsModule,
    LayoutModule,
    DragDropModule
  ],
  providers: [ CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
