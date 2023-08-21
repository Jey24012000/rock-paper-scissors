import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { GameComponent } from './components/game/game.component';
import { GameItemComponent } from './game-item/game-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonsComponent,
    GameComponent,
    GameItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
