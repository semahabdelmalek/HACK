import { Component } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { PopularComponent } from "../popular/popular.component";
import { RegisterComponent } from "../register/register.component";
import { ServicesComponent } from "../services/services.component";
import { TestimonialsComponent } from "../testimonials/testimonials.component";
import { EventsComponent } from "../events/events.component";
import { NgForOf } from "../../../../node_modules/@angular/common/common_module.d-NEF7UaHr";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [MenuComponent, PopularComponent, RegisterComponent, ServicesComponent, TestimonialsComponent, EventsComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  event:any=[
    {photo:"images/event1.jpg",tit:"Formation angular" ,des:"Nous sommes ravis de lancer notre première session de formation avec Mr  Abderahmen masmoudi"
      ,date:"11/10/2025",loc:"enetcom" ,club:"mtc"
     }
  ]

}
