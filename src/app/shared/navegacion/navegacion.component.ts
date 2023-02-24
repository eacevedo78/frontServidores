import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent {

  constructor(private router:Router) { }

  logueado():boolean{
    if(localStorage.getItem('token')!=null)
      return true;
    else
      return false;
  }

  cerrar(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
