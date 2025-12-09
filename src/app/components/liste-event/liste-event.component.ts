import { Component } from '@angular/core';
import { EventsComponent } from "../events/events.component";
import { NgForOf } from "../../../../node_modules/@angular/common/common_module.d-NEF7UaHr";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-liste-event',
  imports: [EventsComponent, NgFor],
  templateUrl: './liste-event.component.html',
  styleUrl: './liste-event.component.css'
})
export class ListeEventComponent {
  event:any=JSON.parse(localStorage.getItem("Event")||"[]");

}
