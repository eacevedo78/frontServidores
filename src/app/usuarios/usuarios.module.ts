import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario/usuario.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { FrmUsuarioComponent } from './frm-usuario/frm-usuario.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    UsuarioComponent,
    ListaUsuariosComponent,
    FrmUsuarioComponent,
    LoginComponent
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
