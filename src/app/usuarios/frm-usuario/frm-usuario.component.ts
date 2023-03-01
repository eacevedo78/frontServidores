import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { ServidoresService } from 'src/app/services/api/servidores.service';
import { ActivatedRoute, Router } from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-frm-usuario',
  templateUrl: './frm-usuario.component.html',
  styleUrls: ['./frm-usuario.component.css']
})
export class FrmUsuarioComponent implements OnInit {
  usuario!:Usuario|null;
  frmUsuario:FormGroup;

  constructor(private servidoresService:ServidoresService,private route:ActivatedRoute,
    private router:Router){
      this.usuario={id:0, nombre:'', password:'',rol:'', correo:''}
      this.frmUsuario = new FormGroup({
        id: new FormControl(this.usuario.id),
        nombre: new FormControl(this.usuario.nombre,[Validators.required]),
        correo: new FormControl(this.usuario.correo,[Validators.required,Validators.email]),
        password: new FormControl(this.usuario.password,[Validators.required]),
        rol: new FormControl(this.usuario.rol,[Validators.required])
      })
    }

  ngOnInit(){
    let id=this.route.snapshot.params['id'];
    if(!id)//si no viene id es que es uno nuevo
      return;
    this.servidoresService.getUsuario(id).subscribe({
      next: (res)=>{
        this.usuario=res.body;
        let obj = Object.assign({},this.usuario);
        this.frmUsuario.patchValue(obj);
      },
      error: (e)=>{console.log(e);alert(e)}
    });
  }

  guardar(){
    if(!this.frmUsuario.valid)
      return;
    this.usuario = Object.assign({},this.frmUsuario.getRawValue());
    this.servidoresService.guardaUsuario(this.usuario).subscribe({
      next:(res) => {
        this.router.navigate(['/usuarios']);
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
  
}
