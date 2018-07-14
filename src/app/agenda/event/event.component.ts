import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

import { EventService } from '../shared/event.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor(private eventService: EventService, private tostr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(eventForm: NgForm) {
    console.log(eventForm.value);
    if (eventForm.value.$key == null)
      this.eventService.insertEvent(eventForm.value);
    else
      this.eventService.updateEvent(eventForm.value);
    this.resetForm(eventForm);
    this.tostr.success('Evento registrado!', 'Agendamento de Eventos');
  }

  resetForm(eventForm?: NgForm) {
    if (eventForm != null)
    eventForm.reset();
    this.eventService.selectedEvent = {
      $key: null,
      servico: '',
      dataHora: '',
      emailUser: ''
    }
  }

}
