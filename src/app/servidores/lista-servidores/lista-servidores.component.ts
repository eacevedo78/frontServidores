import { Component, OnInit } from '@angular/core';
import { ServidoresService } from 'src/app/services/api/servidores.service';
import { Servidor } from '../../models/servidor';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-lista-servidores',
  templateUrl: './lista-servidores.component.html',
  styleUrls: ['./lista-servidores.component.css']
})
export class ListaServidoresComponent implements OnInit {
  servidores:any;//!:Servidor[] | null;

  constructor(private servidoresService: ServidoresService){ }

  ngOnInit(){
    this.servidoresService.getServidores().subscribe({
      next: (res) =>{
        this.servidores= res.body;
        this.servidores= new MatTableDataSource(this.servidores);
      },
      error: (e) =>{
        alert("Error al consultar servidores");
      }
    });
  }

  filtrar(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
    this.servidores.filter = filterValue.trim().toLowerCase();
  }
}
