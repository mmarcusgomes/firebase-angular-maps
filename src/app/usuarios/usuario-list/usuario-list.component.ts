import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../shared/usuario.service';
import { Usuario } from '../shared/usuario.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {
  usuarioList: Usuario[];
  constructor(private usuarioService: UsuarioService, private tostr: ToastrService) { }

  ngOnInit() {
    var x = this.usuarioService.getData();
    x.snapshotChanges().subscribe(item => {
      this.usuarioList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.usuarioList.push(y as Usuario);
      });
    });
  }

  onEdit(user: Usuario) {
    this.usuarioService.selectedUsuario = Object.assign({}, user);
  }

  onDelete(key: string) {
    if (confirm('Você confirma a exclusão deste registro ?') == true) {
      this.usuarioService.deleteUsuario(key);
      this.tostr.warning("Exclusão bem sucedida", "Cadastro de usuários");
    }
  }

}
