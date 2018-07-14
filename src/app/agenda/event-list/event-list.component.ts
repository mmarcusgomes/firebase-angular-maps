import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { Event } from '../shared/event.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  eventList: Event[];
  constructor(private eventService: EventService, private tostr: ToastrService) { }

  ngOnInit() {
    var x = this.eventService.getData();
    x.snapshotChanges().subscribe(item => {
      this.eventList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.eventList.push(y as Event);
      });
    });
  }

  onEdit(user: Event) {
    this.eventService.selectedEvent = Object.assign({}, user);
  }

  onDelete(key: string) {
    if (confirm('Você confirma a exclusão deste evento ?') == true) {
      this.eventService.deleteEvent(key);
      this.tostr.warning("Exclusão bem sucedida", "Registro de Eventos");
    }
  }

}
