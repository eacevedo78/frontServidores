import { Component, OnInit } from '@angular/core';
import { Aplicacion } from 'src/app/models/aplicacion';
import { ServidoresService } from 'src/app/services/api/servidores.service';

@Component({
  selector: 'app-lista-apps',
  templateUrl: './lista-apps.component.html',
  styleUrls: ['./lista-apps.component.css']
})
export class ListaAppsComponent implements OnInit {
  aplicaciones!:Aplicacion[];

  constructor(private servidoresService:ServidoresService){}

  ngOnInit(){
    this.aplicaciones = this.servidoresService.getAplicaciones(1);
  }

}
