import { Component } from '@angular/core';
import { Servidor } from '../../models/servidor'
@Component({
  selector: 'app-servidor',
  templateUrl: './servidor.component.html',
  styleUrls: ['./servidor.component.css']
})
export class ServidorComponent {
  servidor : Servidor = {id:1,ip:'aaa',nombre:'asdfasd',descripcion:'asdfasdfas'}
}
