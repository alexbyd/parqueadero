import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { IngresoComponent } from './casilla/ingreso/Ingreso.component.ts';
//import { SalidaComponent } from './casilla/salida/Salida.component.ts';
//import { CheckComponent } from './casilla/check/Check.component.ts';

const routes: Routes = [
  //{path: "ingreso", component:IngresoComponent},
  //{path: "salida", component:SalidaComponent},
  //{path: "check", component:CheckComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
