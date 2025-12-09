import { Component } from '@angular/core';
import { NewsComponent } from "../news/news.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-liste-news',
  imports: [NewsComponent,NgFor],
  templateUrl: './liste-news.component.html',
  styleUrl: './liste-news.component.css'
})
export class ListeNewsComponent {
  news:any=[
    {photo:"images/news.jpg",tit:"Les emplois du temps" ,des:"Les emplois du temps de la période 2 du premier semestre valable à partir du 03/11/2025 sont disponibles sur l'espace extranet :"
      ,date:"31/10/2025",loc:"enetcom"
     }
  ]

}
