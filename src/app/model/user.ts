export class Usuario {
    id:number;
    usuario:string;
    nombre:string;
    password:string;
    email:string;

    constructor(id:number, usuario:string, nombre:string, password:string, email:string){
        this.id = id;
        this.usuario = usuario;
        this.nombre = nombre;
        this.password = password;
        this.email = email;
    }
}