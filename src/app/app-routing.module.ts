import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaServidoresComponent } from './servidores/lista-servidores/lista-servidores.component';
import { FrmUsuarioComponent } from './usuarios/frm-usuario/frm-usuario.component';
import { ListaUsuariosComponent } from './usuarios/lista-usuarios/lista-usuarios.component';


const routes: Routes = [
  {path:'usuarios',component: ListaUsuariosComponent},
  {path:'servidores', component: ListaServidoresComponent},
  {path:'servidor/:id/edit', component: FrmUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
