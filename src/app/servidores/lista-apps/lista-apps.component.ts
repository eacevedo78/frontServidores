import { Component, OnInit } from '@angular/core';
import { Aplicacion } from 'src/app/models/aplicacion';
import { ServidoresService } from 'src/app/services/api/servidores.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-apps',
  templateUrl: './lista-apps.component.html',
  styleUrls: ['./lista-apps.component.css']
})
export class ListaAppsComponent implements OnInit {
  aplicaciones!:Aplicacion[]|null;
  aplicacion!:Aplicacion|null;

  constructor(private servidoresService:ServidoresService,private route:ActivatedRoute,
    private router:Router){
    this.aplicacion={id:0,nombre:'',version:''}
  }

  ngOnInit(){
    this.consulta();
  }
  guardar(){
    let servidorId:number=this.route.snapshot.params['id'];
    this.servidoresService.guardaAplicacion(servidorId,this.aplicacion).subscribe({
      next:(res) => {
        this.consulta();
      },
      error: (e) =>{console.log(e); }
      }
    )
  }
  editar(id:number){
    let servidorId:number=this.route.snapshot.params['id'];
    this.servidoresService.getAplicacion(servidorId,id).subscribe({
      next: (res)=>{ this.aplicacion=res.body; },
      error: (e) => {console.log(e)}
    });
  }
  nueva(){
    this.aplicacion={id:0,nombre:'',version:''}
  }

  consulta(){
    let id=this.route.snapshot.params['id'];
      this.servidoresService.getAplicaciones(id).subscribe({
        next: (res) => {this.aplicaciones=res.body},
        error: (e) => {console.log(e)}
      });
    this.aplicacion={id:0,nombre:'',version:''}
  }
}
