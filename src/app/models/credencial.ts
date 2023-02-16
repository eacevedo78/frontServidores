import { Aplicacion } from "./aplicacion"

export interface Credencial{
    id:number
    login:string
    password:string
    usuario:number
    aplicacion: Aplicacion|null
}