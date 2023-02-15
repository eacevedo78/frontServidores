import { Component } from '@angular/core';
import { Usuario } from '../../models/usuario'

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  usuario : Usuario = {id:1,nombre:'sadfasd',password:'asfdasd',correo:'asfdsad',rol:'asdfasd'};
}
