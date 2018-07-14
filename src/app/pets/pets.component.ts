import { Component, OnInit } from '@angular/core';
import { PetService } from './shared/pet.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css'],
  providers: [PetService]
})
export class PetsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
