import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaServidoresComponent } from './servidores/lista-servidores/lista-servidores.component';
import { FrmUsuarioComponent } from './usuarios/frm-usuario/frm-usuario.component';
import { FrmServidorComponent } from './servidores/frm-servidor/frm-servidor.component';
import { ListaUsuariosComponent } from './usuarios/lista-usuarios/lista-usuarios.component';
import { ListaAppsComponent } from './servidores/lista-apps/lista-apps.component';
import { ListaCredComponent } from './usuarios/lista-cred/lista-cred.component';
import { LoginComponent } from './usuarios/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'login',component: LoginComponent},

  {path:'usuarios',component: ListaUsuariosComponent,canActivate:[AuthGuard]},
  {path:'usuario/:id', component: FrmUsuarioComponent,canActivate:[AuthGuard]},
  {path:'usuario', component: FrmUsuarioComponent,canActivate:[AuthGuard]},

  {path:'servidores', component: ListaServidoresComponent,canActivate:[AuthGuard]},
  {path:'servidor/:id', component: FrmServidorComponent,canActivate:[AuthGuard]},
  {path:'servidor', component: FrmServidorComponent,canActivate:[AuthGuard]},

  {path:'servidor/:id/aplicaciones', component: ListaAppsComponent,canActivate:[AuthGuard]},

  {path:'usuario/:id/credenciales', component: ListaCredComponent,canActivate:[AuthGuard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
