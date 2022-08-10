import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitleScreenComponent } from './menu/title-screen/title-screen.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OptionsComponent } from './menu/options/options.component';
import {ReactiveFormsModule} from "@angular/forms";
import { GameComponent } from './game/game.component';
import { MainBarComponent } from './game/main-bar/main-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleScreenComponent,
    OptionsComponent,
    GameComponent,
    MainBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
