import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './vistas/inicio/inicio.component';
import { GaleriaComponent } from './vistas/galeria/galeria.component';
import { DivisasComponent } from './vistas/divisas/divisas.component';

const routes: Routes = [
  {
    path: "inicio", component:InicioComponent
  },{
    path: "galeria", component:GaleriaComponent
  },{
    path: "divisas", component:DivisasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
