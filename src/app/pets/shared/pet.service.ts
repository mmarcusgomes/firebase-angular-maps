import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Pet } from './pet.model';
@Injectable()
export class PetService {
  petList: AngularFireList<any>;
  selectedPet: Pet = new Pet();
  constructor(private firebase :AngularFireDatabase ) { }

  getData(){
    this.petList = this.firebase.list('pets');
    return this.petList;
  }

  insertPet(pet : Pet)
  {
    this.petList.push({
      nome: pet.nome,
      raca: pet.raca,
      emailUser: pet.emailUser
    });
  }

  updatePet(pet : Pet){
    this.petList.update(pet.$key,
      {
        nome: pet.nome,
        raca: pet.raca,
        emailUser: pet.emailUser
      });
  }

  deletePet($key : string){
    this.petList.remove($key);
  }

}
