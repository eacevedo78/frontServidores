import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario/usuario.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { FrmUsuarioComponent } from './frm-usuario/frm-usuario.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsuarioComponent,
    ListaUsuariosComponent,
    FrmUsuarioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    UsuarioComponent,
    FrmUsuarioComponent,
    ListaUsuariosComponent
  ]
})
export class UsuariosModule { }
