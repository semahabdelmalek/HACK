import { Component } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { PopularComponent } from "../popular/popular.component";
import { RegisterComponent } from "../register/register.component";
import { ServicesComponent } from "../services/services.component";
import { TestimonialsComponent } from "../testimonials/testimonials.component";
import { EventsComponent } from "../events/events.component";

@Component({
  selector: 'app-home',
  imports: [MenuComponent, PopularComponent, RegisterComponent, ServicesComponent, TestimonialsComponent, EventsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
