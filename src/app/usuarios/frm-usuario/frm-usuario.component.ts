import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { ServidoresService } from 'src/app/services/api/servidores.service';

@Component({
  selector: 'app-frm-usuario',
  templateUrl: './frm-usuario.component.html',
  styleUrls: ['./frm-usuario.component.css']
})
export class FrmUsuarioComponent implements OnInit {
  usuario!:Usuario;

  constructor(private servidoresService:ServidoresService){ }

  ngOnInit(){
    this.usuario = this.servidoresService.getUsuario(1);
  }
  
}
