import { Component } from '@angular/core';
import { Servidor } from 'src/app/models/servidor';

@Component({
  selector: 'app-servidor',
  templateUrl: './servidor.component.html',
  styleUrls: ['./servidor.component.css']
})
export class ServidorComponent {
  servidor : Servidor = new Servidor();
}
