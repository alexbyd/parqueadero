import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngresoComponent } from './casilla/ingreso/ingreso.component';
import { SalidaComponent } from './casilla/salida/salida.component';
import { CheckComponent } from './casilla/check/check.component';

@NgModule({
  declarations: [
    AppComponent,
    IngresoComponent,
    SalidaComponent,
    CheckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
