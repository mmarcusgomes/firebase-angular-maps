import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Usuario} from './usuario.model';
@Injectable()
export class UsuarioService {
  usuarioList: AngularFireList<any>;
  selectedUsuario: Usuario = new Usuario();
  constructor(private firebase :AngularFireDatabase ) { }

  getData(){
    this.usuarioList = this.firebase.list('usuarios');
    return this.usuarioList;
  }

  insertUsuario(user : Usuario)
  {
    this.usuarioList.push({
      nome: user.nome,
      sobrenome: user.sobrenome,
      email: user.email
    });
  }

  updateUsuario(user : Usuario){
    this.usuarioList.update(user.$key,
      {
        nome: user.nome,
        sobrenome: user.sobrenome,
        email: user.email
      });
  }

  deleteUsuario($key : string){
    this.usuarioList.remove($key);
  }

}
