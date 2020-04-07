import { Component } from '@angular/core';
import { Usuario } from './model/user';

@Component({
  selector: 'usr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CapacitacionAngular';

  usuarios:Usuario[] = [];
  columnas:string[] = ['Id','Nombre','Usuario','Correo']

  constructor(){
    let usuario = new Usuario(1, 'ahsan', 'Luis David Pérez Bermúdez', '123', 'luis.perez@utp.edu.co');
    let usuario2 = new Usuario(2, 'blackk', 'Cesar Augusto Díaz', '456', 'black@utp.edu.co');
    let usuario3 = new Usuario(3, 'Pepito1', 'Pepito Pérez', '789', 'pepitoperez@utp.edu.co');

    this.usuarios.push(usuario, usuario2, usuario3);
  }
}
