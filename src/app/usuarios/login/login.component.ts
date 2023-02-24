import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServidoresService } from 'src/app/services/api/servidores.service';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  
  constructor(private servidoresService:ServidoresService,private router:Router){
    //this.email="";
    //this.password="";
  }

  login(){
    this.servidoresService.login(this.email.value, this.password.value).subscribe({
      next:(res) =>{
        let body:any = res.body;
        localStorage.setItem("token",body.token);
        localStorage.setItem("email",this.email.value || '');
        this.servidoresService.setToken();
        this.router.navigate(['/servidores']);
      },
      error: (e) =>{
        alert("Usuario y/o password incorrectos");
      }});
  }
}
