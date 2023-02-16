import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { ServidoresService } from 'src/app/services/api/servidores.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-frm-usuario',
  templateUrl: './frm-usuario.component.html',
  styleUrls: ['./frm-usuario.component.css']
})
export class FrmUsuarioComponent implements OnInit {
  usuario!:Usuario|null;

  constructor(private servidoresService:ServidoresService,private route:ActivatedRoute,
    private router:Router){
      this.usuario={id:0, nombre:'', password:'',rol:'', correo:''}
    }

  ngOnInit(){
    let id=this.route.snapshot.params['id'];
    if(!id)//si no viene id es que es uno nuevo
      return;
    this.servidoresService.getUsuario(id).subscribe({
      next: (res)=>{this.usuario=res.body},
      error: (e)=>{console.log(e);alert(e)}
    });
  }

  guardar(){
    this.servidoresService.guardaUsuario(this.usuario).subscribe({
      next:(res) => {
        this.router.navigate(['/usuarios']);
      },
      error: (e) =>{console.log(e); }
      }
    )
  }
  
}
