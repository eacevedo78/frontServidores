import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Servidor } from '../../models/servidor';
import { Usuario } from '../../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class ServidoresService {

  constructor(/*private httpClient : HttpClient*/) {
  
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

  getUsuarios():Usuario[]{
    return [
      {id:1,nombre:'Usu 1',correo:'usu1@gmail.com',password:'12345',rol: 'USU'},
      {id:2,nombre:'Usu 2',correo:'usu2@gmail.com',password:'12345',rol: 'USU'},
      {id:3,nombre:'Usu 3',correo:'usu3@gmail.com',password:'12345',rol: 'USU'},
      {id:4,nombre:'Usu 4',correo:'usu4@gmail.com',password:'12345',rol: 'USU'},
      {id:5,nombre:'Usu 5',correo:'usu5@gmail.com',password:'12345',rol: 'ADM'}];
  }
}
