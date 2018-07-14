import { Component, OnInit } from '@angular/core';
import { PetService } from '../shared/pet.service';
import { Pet } from '../shared/pet.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {
  petList: Pet[];
  constructor(private petService: PetService, private tostr: ToastrService) { }

  ngOnInit() {
    var x = this.petService.getData();
    x.snapshotChanges().subscribe(item => {
      this.petList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.petList.push(y as Pet);
      });
    });
  }

  onEdit(pet: Pet) {
    this.petService.selectedPet = Object.assign({}, pet);
  }

  onDelete(key: string) {
    if (confirm('Você confirma a exclusão deste pet ?') == true) {
      this.petService.deletePet(key);
      this.tostr.warning("Exclusão bem sucedida", "Cadastro de pets");
    }
  }

}
