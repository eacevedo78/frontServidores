import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Servidor } from '../../models/servidor';
import { Usuario } from '../../models/usuario';
import { Aplicacion } from '../../models/aplicacion';
import { Credencial } from '../../models/credencial';

@Injectable({
  providedIn: 'root'
})
export class ServidoresService {
  url="http://localhost:8080";
  enc!:{[key:string]:string};

  constructor(private httpClient : HttpClient) {
    this.setToken();
  }

  setToken(){
    let token="Bearer "+localStorage.getItem('token');
    this.enc={'Authorization': token,'accept':'application/json'}
  }

  /*** Api Servidores ****/
  getServidores(){
    let ruta=`${this.url}/servidores`;
    //console.log("Encabezado",this.enc);
    return this.httpClient.get<Servidor[]>(ruta,{headers: this.enc,observe:'response'});
  }

  getServidor(id:number){
    let ruta=`${this.url}/servidor/${id}`;
    return this.httpClient.get<Servidor>(ruta, {headers: this.enc,observe:'response'});
  }
  guardaServidor(servidor:Servidor|null){
    let ruta=`${this.url}/servidor`;
    if(servidor!.id==0)
      return this.httpClient.post<Servidor>(ruta,servidor,{headers: this.enc,observe:'response'});
    else{
      ruta=`${this.url}/servidor/${servidor!.id}`;
      return this.httpClient.put<Servidor>(ruta,servidor,{headers: this.enc,observe:'response'});
    }
  }

  /*** Api Usuarios ****/

  getUsuarios(){
    let ruta=`${this.url}/usuarios`;
    return this.httpClient.get<Usuario[]>(ruta,{headers: this.enc,observe:'response'});
  }

  getUsuario(id:number){
    let ruta=`${this.url}/usuario/${id}`;
    return this.httpClient.get<Usuario>(ruta, {headers: this.enc,observe:'response'});
  }

  guardaUsuario(usuario:Usuario|null){
    let ruta=`${this.url}/usuario`;
    if(usuario!.id==0)
      return this.httpClient.post<Usuario>(ruta,usuario,{headers: this.enc,observe:'response'});
    else{
      ruta=`${this.url}/usuario/${usuario!.id}`;
      return this.httpClient.put<Usuario>(ruta,usuario,{headers: this.enc,observe:'response'});
    }
  }

  
  /*** Api Aplicaciones ****/
  getAplicaciones(servidorId:number){
    let ruta=`${this.url}/servidor/${servidorId}/aplicaciones`;
    return this.httpClient.get<Aplicacion[]>(ruta,{headers: this.enc,observe:'response'});
  }
  getAppSrv(){
    let ruta=`${this.url}/aplicaciones`;
    return this.httpClient.get<Aplicacion[]>(ruta,{headers: this.enc,observe:'response'});
  }
  getAplicacion(servidorId:number,id:number){
    let ruta=`${this.url}/servidor/${servidorId}/aplicacion/${id}`;
    return this.httpClient.get<Aplicacion>(ruta,{headers: this.enc,observe:'response'});
  }
  guardaAplicacion(servidorId:number,app:Aplicacion|null){
    let ruta=`${this.url}/servidor/${servidorId}/aplicacion`;
    if(app!.id==0)
      return this.httpClient.post<Aplicacion>(ruta,app,{headers: this.enc,observe:'response'});
    else{
      ruta=`${this.url}/servidor/${servidorId}/aplicacion/${app!.id}`;
      return this.httpClient.put<Aplicacion>(ruta,app,{headers: this.enc,observe:'response'});
    }
  }

  /*** Api Credenciales ****/
  getCredenciales(usuarioId:number){
    let ruta=`${this.url}/usuario/${usuarioId}/credenciales`;
    return this.httpClient.get<Credencial[]>(ruta,{headers: this.enc,observe:'response'});
  }
  getCredencial(usuarioId:number,id:number){
    let ruta=`${this.url}/usuario/${usuarioId}/credencial/${id}`;
    return this.httpClient.get<Credencial>(ruta,{headers: this.enc,observe:'response'});
  }
  guardaCredencial(usuarioId:number,aplicacionId:number,cred:Credencial|null){
    let ruta=`${this.url}/usuario/${usuarioId}/credencial`;
    if(cred!.id==0)
      return this.httpClient.post<Credencial>(ruta,cred,{headers: this.enc,observe:'response'});
    else{
      ruta=`${this.url}/usuario/${usuarioId}/aplicacion/${aplicacionId}/credencial/${cred!.id}`;
      return this.httpClient.put<Credencial>(ruta,cred,{headers: this.enc,observe:'response'});
    }
  }

  /*** Api Login ****/
  login(email:string|null, password:string|null){
    let head={'Access-Control-Expose-Headers':'Authorization'}
    return this.httpClient.post(this.url+"/login", 
    {"email":email,"password":password},{headers: head,observe: 'response'});
  }
}
