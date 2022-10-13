import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContenitoreComponent } from './contenitore/contenitore.component';
import { FiglioComponent } from './figlio/figlio.component';

@NgModule({
  declarations: [
    AppComponent,
    ContenitoreComponent,
    FiglioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
