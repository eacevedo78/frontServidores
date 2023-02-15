import { Component, OnInit } from '@angular/core';
import { ServidoresService } from '../../services/api/servidores.service';
import { Usuario } from '../../models/usuario';
//import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  usuarios!:Usuario[];

  constructor(private servidoresService:ServidoresService){}

  ngOnInit(){
    this.usuarios= this.servidoresService.getUsuarios();
  }

}
