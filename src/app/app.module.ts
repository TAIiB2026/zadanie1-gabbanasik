import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Komponent2Component } from './komponent2/komponent2.component';
import { PodkreslenieDirective } from './podkreslenie.directive';
import { ListaStandaloneComponent } from './lista-standalone/lista-standalone.component';

@NgModule({
  declarations: [
    AppComponent,
    Komponent2Component,
    PodkreslenieDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListaStandaloneComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
