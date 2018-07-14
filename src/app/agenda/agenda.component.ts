import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css'],
  providers: [EventService]
})
export class AgendaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
