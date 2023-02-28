import { Component, OnInit } from '@angular/core';
import { Credencial } from 'src/app/models/credencial';
import { ServidoresService } from 'src/app/services/api/servidores.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-lista-cred',
  templateUrl: './lista-cred.component.html',
  styleUrls: ['./lista-cred.component.css']
})
export class ListaCredComponent implements OnInit {
  credenciales:any;//!:Credencial[]|null;
  credencial!:Credencial|null;
  frmCred:FormGroup;

  constructor(private servidoresService:ServidoresService,private route:ActivatedRoute,
    private router:Router){
    this.credencial={id:0,login:'',password:'',usuario:0,aplicacion:null}
    this.frmCred= new FormGroup({
      id: new FormControl(this.credencial.id),
      login: new FormControl(this.credencial.login,[Validators.required]),
      password: new FormControl(this.credencial.password,[Validators.required]),
    })
  }
  ngOnInit(): void {
      this.consulta();
  }

  guardar(){
    if(!this.frmCred.valid )
      return;
    let usuarioId:number=this.route.snapshot.params['id'];
    this.credencial = Object.assign({},this.frmCred.getRawValue());
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
      next: (res)=>{
        this.credencial=res.body;
        let obj = Object.assign({},this.credencial);
        this.frmCred.patchValue(obj);
      },
      error: (e) => {console.log(e)}
    });
  }

  nueva(){
    this.credencial={id:0,login:'',password:'',usuario:0,aplicacion:null}
  }
  
  consulta(){
    let id=this.route.snapshot.params['id'];
      this.servidoresService.getCredenciales(id).subscribe({
        next: (res) => {
          this.credenciales=res.body;
          console.log(this.credenciales);
          this.credenciales = new MatTableDataSource(this.credenciales);
        },
        error: (e) => {console.log(e)}
      });
      this.credencial={id:0,login:'',password:'',usuario:0,aplicacion:null}
  }
}
