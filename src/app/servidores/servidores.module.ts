import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServidorComponent } from './servidor/servidor.component';
import { ListaServidoresComponent } from './lista-servidores/lista-servidores.component';


@NgModule({
  declarations: [
    ServidorComponent,
    ListaServidoresComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ServidorComponent
  ]
})
export class ServidoresModule { }
