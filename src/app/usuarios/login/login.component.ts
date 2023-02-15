import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServidoresService } from 'src/app/services/api/servidores.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!:string;
  password!:string;
  
  constructor(private servidoresService:ServidoresService,private router:Router){
    this.email="";
    this.password="";
  }

  login(){
    this.servidoresService.login(this.email,this.password).subscribe(
      res =>{
        let body:any = res.body;
        localStorage.setItem("token",body.token);
        localStorage.setItem("email",this.email);
        this.router.navigate(['/servidores']);
      });
  }
  
}
