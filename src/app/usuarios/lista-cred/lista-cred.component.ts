import { Component, OnInit } from '@angular/core';
import { Credencial } from 'src/app/models/credencial';
import { ServidoresService } from 'src/app/services/api/servidores.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-cred',
  templateUrl: './lista-cred.component.html',
  styleUrls: ['./lista-cred.component.css']
})
export class ListaCredComponent implements OnInit {
  credenciales!:Credencial[]|null;
  credencial!:Credencial|null;

  constructor(private servidoresService:ServidoresService,private route:ActivatedRoute,
    private router:Router){
    this.credencial={id:0,login:'',password:'',usuario:0,aplicacion:null}
  }
  ngOnInit(): void {
      this.consulta();
  }

  guardar(){
    let usuarioId:number=this.route.snapshot.params['id'];
    this.servidoresService.guardaCredencial(usuarioId,this.credencial).subscribe({
      next:(res) => {
        this.consulta();
      },
      error: (e) =>{console.log(e); }
      }
    )
  }
  editar(id:number){
    let usuarioId:number=this.route.snapshot.params['id'];
    this.servidoresService.getCredencial(usuarioId,id).subscribe({
      next: (res)=>{ this.credencial=res.body; },
      error: (e) => {console.log(e)}
    });
  }

  nueva(){
    this.credencial={id:0,login:'',password:'',usuario:0,aplicacion:null}
  }
  
  consulta(){
    let id=this.route.snapshot.params['id'];
      this.servidoresService.getCredenciales(id).subscribe({
        next: (res) => {this.credenciales=res.body},
        error: (e) => {console.log(e)}
      });
      this.credencial={id:0,login:'',password:'',usuario:0,aplicacion:null}
  }



}
