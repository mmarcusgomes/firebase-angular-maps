import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Event } from './event.model';
@Injectable()
export class EventService {
  eventList: AngularFireList<any>;
  selectedEvent: Event = new Event();
  constructor(private firebase :AngularFireDatabase ) { }

  getData(){
    this.eventList = this.firebase.list('events');
    return this.eventList;
  }

  insertEvent(evento : Event)
  { 
    console.log("Insert");
    console.log(evento);
    
    this.eventList.push({
      servico: evento.servico,
      dataHora: evento.dataHora,
      emailUser: evento.emailUser
    });
  }

  updateEvent(evento : Event){
    this.eventList.update(evento.$key,
      {
        servico: evento.servico,
        dataHora: evento.dataHora,
        emailUser: evento.emailUser
      });
  }

  deleteEvent($key : string){
    this.eventList.remove($key);
  }

}