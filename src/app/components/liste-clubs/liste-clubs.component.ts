import { Component } from '@angular/core';
import { NgForOf } from "../../../../node_modules/@angular/common/common_module.d-NEF7UaHr";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-liste-clubs',
  imports: [NgFor],
  templateUrl: './liste-clubs.component.html',
  styleUrl: './liste-clubs.component.css'
})
export class ListeClubsComponent {
  club:any=JSON.parse(localStorage.getItem("Club")||"[]");

}
