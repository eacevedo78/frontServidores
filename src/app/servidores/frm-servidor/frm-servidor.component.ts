import { Component, OnInit } from '@angular/core';
import { Servidor } from 'src/app/models/servidor';
import { ServidoresService } from 'src/app/services/api/servidores.service';

@Component({
  selector: 'app-frm-servidor',
  templateUrl: './frm-servidor.component.html',
  styleUrls: ['./frm-servidor.component.css']
})
export class FrmServidorComponent implements OnInit {
  servidor!:Servidor;

  constructor(private servidoresService:ServidoresService){}

  ngOnInit(){
    this.servidor=this.servidoresService.getServidor(1);
  }
}
