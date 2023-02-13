import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario/usuario.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { FrmUsuarioComponent } from './frm-usuario/frm-usuario.component';



@NgModule({
  declarations: [
    UsuarioComponent,
    ListaUsuariosComponent,
    FrmUsuarioComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    UsuarioComponent,
    FrmUsuarioComponent,
    ListaUsuariosComponent
  ]
})
export class UsuariosModule { }
