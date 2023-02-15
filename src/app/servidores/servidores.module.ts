import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServidorComponent } from './servidor/servidor.component';
import { ListaServidoresComponent } from './lista-servidores/lista-servidores.component';
import { RouterModule } from '@angular/router';
import { FrmServidorComponent } from './frm-servidor/frm-servidor.component';
import { FormsModule } from '@angular/forms';
import { ListaAppsComponent } from './lista-apps/lista-apps.component';

@NgModule({
  declarations: [
    ServidorComponent,
    ListaServidoresComponent,
    FrmServidorComponent,
    ListaAppsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    ServidorComponent
  ]
})
export class ServidoresModule { }
