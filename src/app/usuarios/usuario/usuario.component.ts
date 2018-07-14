import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

import { UsuarioService } from '../shared/usuario.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private tostr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(usuarioForm: NgForm) {
    if (usuarioForm.value.$key == null)
      this.usuarioService.insertUsuario(usuarioForm.value);
    else
      this.usuarioService.updateUsuario(usuarioForm.value);
    this.resetForm(usuarioForm);
    this.tostr.success('Cadastro atualizado', 'Registro de Usuário');
  }

  resetForm(usuarioForm?: NgForm) {
    if (usuarioForm != null)
    usuarioForm.reset();
    this.usuarioService.selectedUsuario = {
      $key: null,
      nome: '',
      sobrenome: '',
      email: ''
    }
  }

}
