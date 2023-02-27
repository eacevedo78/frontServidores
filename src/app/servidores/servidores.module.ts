import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServidorComponent } from './servidor/servidor.component';
import { ListaServidoresComponent } from './lista-servidores/lista-servidores.component';
import { RouterModule } from '@angular/router';
import { FrmServidorComponent } from './frm-servidor/frm-servidor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaAppsComponent } from './lista-apps/lista-apps.component';
import { MatTableModule} from '@angular/material/table'
import { MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';

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
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  exports:[
    ServidorComponent
  ]
})
export class ServidoresModule { }
