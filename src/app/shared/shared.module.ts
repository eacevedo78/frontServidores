import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PieComponent } from './pie/pie.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    EncabezadoComponent,
    PieComponent,
    NavegacionComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatButtonModule
  ],
  exports:[
    EncabezadoComponent,
    PieComponent,
    NavegacionComponent
  ]
})
export class SharedModule { }
