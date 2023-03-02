import { Component, OnInit } from '@angular/core';
import { Credencial } from 'src/app/models/credencial';
import { Aplicacion } from 'src/app/models/aplicacion';
import { ServidoresService } from 'src/app/services/api/servidores.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import {FormControl, FormGroup, NonNullableFormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-lista-cred',
  templateUrl: './lista-cred.component.html',
  styleUrls: ['./lista-cred.component.css']
})
export class ListaCredComponent implements OnInit {
  credenciales:any;//!:Credencial[]|null;
  credencial!:Credencial|null;
  frmCred:FormGroup;
  aplicaciones:any;
  ver:boolean=true;

  constructor(private servidoresService:ServidoresService,private route:ActivatedRoute,
    private router:Router){
    this.credencial={id:0,login:'',password:'',usuario:0,aplicacion:null}
    this.frmCred= new FormGroup({
      id: new FormControl(this.credencial.id),
      login: new FormControl(this.credencial.login,[Validators.required]),
      password: new FormControl(this.credencial.password,[Validators.required]),
      aplicacionId: new FormControl(this.credencial.aplicacion?.id,[Validators.required]),
    })
  }
  ngOnInit(): void {
      this.ver=true;
      this.apps();
      this.consulta();
  }

  guardar(){
    if(!this.frmCred.valid )
      return;
    let usuarioId:number=this.route.snapshot.params['id'];
    this.credencial = Object.assign({},this.frmCred.getRawValue());
    //console.log(this.frmCred.get('aplicacionId')?.value);
    let aplicacionId= this.frmCred.get('aplicacionId')?.value;
    this.servidoresService.guardaCredencial(usuarioId,Number(aplicacionId),this.credencial).subscribe({
      next:(res) => {
        this.consulta();
      },
      error: (e) =>{
        if(e.status == 400){
          //console.log(e.error.errores);
          let msg =''
          Object.keys(e.error.errores).map(k =>{
            msg+=e.error.errores[k]+" \n";
          });
          alert(msg);
        }else
          console.log(e);
      }
      }
    )
  }
  editar(id:number){
    let usuarioId:number=this.route.snapshot.params['id'];
    this.servidoresService.getCredencial(usuarioId,id).subscribe({
      next: (res)=>{
        this.credencial=res.body;
        let obj:any = Object.assign({},this.credencial);
        obj.aplicacionId = this.credencial!.aplicacion!.id;
        //console.log(this.credencial);
        this.frmCred.patchValue(obj);
      },
      error: (e) => {console.log(e)}
    });
  }

  nueva(){
    this.credencial={id:0,login:'',password:'',usuario:0,aplicacion:null}
    this.frmCred.patchValue(this.credencial);
  }
  
  consulta(){
    let id=this.route.snapshot.params['id'];
    
    this.servidoresService.getCredenciales(id).subscribe({
      next: (res) => {
        this.credenciales=res.body;
        //console.log(this.credenciales);
        this.credenciales = new MatTableDataSource(this.credenciales);
      },
      error: (e) => {console.log(e)}
    });
    /*this.credencial={id:0,login:'',password:'',usuario:0,aplicacion:null}
    this.frmCred.reset(Object.assign({},this.credencial));*/
  }
  apps(){
    this.servidoresService.getAppSrv().subscribe({
      next: (res) => {
        this.aplicaciones=res.body;
      },
      error: (e) => {console.log(e)}
    });
  }
  eliminar(id:number){
    let usuarioId:number=this.route.snapshot.params['id'];
    this.servidoresService.eliminaCredencial(usuarioId,id).subscribe({
      next: (res) =>{
        this.consulta();
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

  verOcultar(){
    this.ver = !this.ver;
  }
}
