import { Component, OnInit } from '@angular/core';
import { ServidoresService } from '../../services/api/servidores.service';
import { Usuario } from '../../models/usuario';
import { MatTableDataSource } from '@angular/material/table';
//import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  usuarios:any;//Usuario[]|null;

  constructor(private servidoresService:ServidoresService){}

  ngOnInit(){
    this.consultar();
  }

  consultar(){
    this.servidoresService.getUsuarios().subscribe({
      next: (res) =>{
        this.usuarios=res.body;
        this.usuarios = new MatTableDataSource(this.usuarios);
      },
      error: (e) => {console.log(e)}
    });
  }

  filtrar(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
    this.usuarios.filter = filterValue.trim().toLowerCase();
  }

  eliminar(id:number){
    this.servidoresService.eliminaUsuario(id).subscribe({
      next: (res) =>{
        this.consultar();
      },
      error: (e) =>{
        //console.log(e);
        if(e.status == 403)
          alert("No se puede eliminar: " + e.error.detail);
        else
          alert("Error al consultar servidores ");
      }
    });  
  }

}
