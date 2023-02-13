export class Servidor{
    public id:number;
    public ip:string;
    public nombre:string;
    public descripcion:string;

    constructor(){
        this.id=0;
        this.ip='0.0.0.0';
        this.nombre="Srv1";
        this.descripcion='Servidor de prueba';
    }
}