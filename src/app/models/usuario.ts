export class Usuario{
    public id:number;
    public nombre:string;
    public correo:string;
    public password:string;
    public rol:string;

    constructor(){
        this.id=0;
        this.nombre='Emmanuel';
        this.correo='eacevedo78@yahoo.com.mx';
        this.password='secreto';
        this.rol='USU';
    }
    
}