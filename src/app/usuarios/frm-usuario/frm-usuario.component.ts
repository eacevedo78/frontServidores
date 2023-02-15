import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-frm-usuario',
  templateUrl: './frm-usuario.component.html',
  styleUrls: ['./frm-usuario.component.css']
})
export class FrmUsuarioComponent {
  usuario:Usuario={id: 1,nombre: "Emmanuel",correo:"asdfsad",password:"dafdads",rol:"ADM"};

}
