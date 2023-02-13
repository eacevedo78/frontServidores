import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServidorComponent } from './servidores/servidor/servidor.component';
import { ListaUsuariosComponent } from './usuarios/lista-usuarios/lista-usuarios.component';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';

const routes: Routes = [
  {path:'usuarios',component: ListaUsuariosComponent},
  {path:'servidores', component: ServidorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
