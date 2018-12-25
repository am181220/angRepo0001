import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MycmpnntComponent } from './mycmpnnt/mycmpnnt.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    MycmpnntComponent
  ],
  imports: [
     BrowserModule,
     FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
