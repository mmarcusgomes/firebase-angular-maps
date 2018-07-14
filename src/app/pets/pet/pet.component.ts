import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

import { PetService } from '../shared/pet.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  constructor(private petService: PetService, private tostr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(petForm: NgForm) {
    if (petForm.value.$key == null)
      this.petService.insertPet(petForm.value);
    else
      this.petService.updatePet(petForm.value);
    this.resetForm(petForm);
    this.tostr.success('Cadastro atualizado', 'Registro de Pets');
  }

  resetForm(petForm?: NgForm) {
    if (petForm != null)
    petForm.reset();
    this.petService.selectedPet = {
      $key: null,
      nome: '',
      raca: '',
      emailUser: ''
    }
  }

}
