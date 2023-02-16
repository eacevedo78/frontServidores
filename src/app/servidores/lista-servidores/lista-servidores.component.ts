import { Component, OnInit } from '@angular/core';
import { ServidoresService } from 'src/app/services/api/servidores.service';
import { Servidor } from '../../models/servidor';


@Component({
  selector: 'app-lista-servidores',
  templateUrl: './lista-servidores.component.html',
  styleUrls: ['./lista-servidores.component.css']
})
export class ListaServidoresComponent implements OnInit {
  servidores!:Servidor[] | null;

  constructor(private servidoresService: ServidoresService){ }

  ngOnInit(){
    this.servidoresService.getServidores().subscribe({
      next: (res) =>{
        this.servidores=res.body;
      },
      error: (e) =>{
        alert("Error al consultar servidores");
      }
    });
  }
}
