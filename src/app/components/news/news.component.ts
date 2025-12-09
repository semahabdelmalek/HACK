import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news',
  imports: [],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  @Input() obj1:any={};


}
