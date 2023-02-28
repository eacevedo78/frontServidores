import { Component, OnInit } from '@angular/core';
import { Aplicacion } from 'src/app/models/aplicacion';
import { ServidoresService } from 'src/app/services/api/servidores.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-lista-apps',
  templateUrl: './lista-apps.component.html',
  styleUrls: ['./lista-apps.component.css']
})
export class ListaAppsComponent implements OnInit {
  aplicaciones:any;//Aplicacion[]|null;
  aplicacion!:Aplicacion|null;
  frmApp:FormGroup;

  constructor(private servidoresService:ServidoresService,private route:ActivatedRoute,
    private router:Router){
    this.aplicacion={id:0,nombre:'',version:''}
    this.frmApp = new FormGroup({
      id: new FormControl(this.aplicacion.id),
      nombre: new FormControl(this.aplicacion.nombre,[Validators.required]),
      version: new FormControl(this.aplicacion.version,[Validators.required])
    });
  }

  ngOnInit(){
    this.consulta();
  }
  guardar(){
    if(!this.frmApp.valid )
      return;
    let servidorId:number=this.route.snapshot.params['id'];
    this.aplicacion = Object.assign({},this.frmApp.getRawValue());
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
      next: (res)=>{
        this.aplicacion=res.body;
        let obj = Object.assign({},this.aplicacion);
        this.frmApp.patchValue(obj);
      },
      error: (e) => {console.log(e)}
    });
  }

  nueva(){
    this.aplicacion={id:0,nombre:'',version:''}
  }

  consulta(){
    let id=this.route.snapshot.params['id'];
      this.servidoresService.getAplicaciones(id).subscribe({
        next: (res) => {
          this.aplicaciones=res.body;
          this.aplicaciones = new MatTableDataSource(this.aplicaciones);
        },
        error: (e) => {console.log(e)}
      });
    this.aplicacion={id:0,nombre:'',version:''}
  }
}
