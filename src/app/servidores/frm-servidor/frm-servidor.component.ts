import { Component, OnInit } from '@angular/core';
import { Servidor } from 'src/app/models/servidor';
import { ServidoresService } from 'src/app/services/api/servidores.service';
import { ActivatedRoute, Router } from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-frm-servidor',
  templateUrl: './frm-servidor.component.html',
  styleUrls: ['./frm-servidor.component.css']
})
export class FrmServidorComponent implements OnInit {
  //servidor!:Servidor|null;
  servidor = new FormGroup({
    id: new FormControl<number>(0),
    nombre: new FormControl<string>('',[Validators.required]),
    ip: new FormControl<string>('',[Validators.required]),
    descripcion: new FormControl<string>('',[Validators.required])
  });

  constructor(private servidoresService:ServidoresService,private route:ActivatedRoute,
    private router:Router){
    this.servidor={id:0,nombre:"",ip:"",descripcion:""}
  }

  ngOnInit(){
    let id=this.route.snapshot.params['id'];
    if(!id)//si no viene id es que es uno nuevo
      return;
    this.servidoresService.getServidor(id).subscribe({
      next: (res)=>{this.servidor=res.body},
      error: (e)=>{console.log(e);alert(e)}
    });
  }
  guardar(){
    this.servidoresService.guardaServidor(this.servidor).subscribe({
      next:(res) => {
        this.router.navigate(['/servidores']);
      },
      error: (e) =>{console.log(e); }
      }
    )
  }
}
