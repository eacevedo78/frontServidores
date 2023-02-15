import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Servidor } from '../../models/servidor';
import { Usuario } from '../../models/usuario';
import { Aplicacion } from '../../models/aplicacion';

@Injectable({
  providedIn: 'root'
})
export class ServidoresService {
  url="http://localhost:8080/";

  constructor(private httpClient : HttpClient) {
  
  }

  getServidores():Servidor[]{
    return [{id:1,ip:'0.0.0.0',nombre:'Servidor 1',descripcion: 'Descripcion Servidor 1'},
    {id:2,ip:'1.1.1.1',nombre:'Servidor 2',descripcion: 'Descripcion Servidor 2'},
    {id:3,ip:'2.2.2.2',nombre:'Servidor 3',descripcion: 'Descripcion Servidor 3'},
    {id:4,ip:'3.3.3.3',nombre:'Servidor 4',descripcion: 'Descripcion Servidor 4'},
    {id:5,ip:'4.4.4.4',nombre:'Servidor 5',descripcion: 'Descripcion Servidor 5'}];
  }

  getServidor(id:number):Servidor{
    return {id:1,ip:'0.0.0.0',nombre:'Servidor 1',descripcion: 'Descripcion Servidor 1'}
  }

  getUsuario(id:number):Usuario{
    return {id:1,nombre:'Usu 1',correo:'usu1@gmail.com',password:'12345',rol: 'ADM'};
  }

  getUsuarios():Usuario[]{
    return [
      {id:1,nombre:'Usu 1',correo:'usu1@gmail.com',password:'12345',rol: 'USU'},
      {id:2,nombre:'Usu 2',correo:'usu2@gmail.com',password:'12345',rol: 'USU'},
      {id:3,nombre:'Usu 3',correo:'usu3@gmail.com',password:'12345',rol: 'USU'},
      {id:4,nombre:'Usu 4',correo:'usu4@gmail.com',password:'12345',rol: 'USU'},
      {id:5,nombre:'Usu 5',correo:'usu5@gmail.com',password:'12345',rol: 'ADM'}];
  }

  getAplicaciones(servidorId:number):Aplicacion[]{
    return [{id:1,nombre:"Tomcat",version:"4.5",servidor_id:1}]
  }

  login(email:string, password:string){
    let head= new HttpHeaders().set("Access-Control-Allow-Headers","Origin, Accept, Authorization, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    return this.httpClient.post(this.url+"login", 
    {"email":email,"password":password},{headers: head,observe: 'response'});
  }
}
