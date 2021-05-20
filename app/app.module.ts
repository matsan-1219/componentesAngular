import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Compo3Component } from './compo3/compo3.component';
import { Compo4Component } from './compo4/compo2.component';
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';

@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    Componente2Component,
    Compo3Component,
    Compo4Component
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
