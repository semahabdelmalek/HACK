import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-news',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './add-news.component.html',
  styleUrl: './add-news.component.css'
})
export class AddNewsComponent implements OnInit {
  addNews!:FormGroup;
  constructor(private fb:FormBuilder){};
  ngOnInit(): void {
    this.addNews=this.fb.group({
       Email:["",[Validators.required,Validators.email]],
      Pwd:["",[Validators.required]],
      tit:["",[Validators.required]],
      des:["",[Validators.required]],
      loc:["",[Validators.required]],
      date:["",[Validators.required]],
      lien:["",[Validators.required]],
      photo:[""],
    })
  }



   imagePreview: string | null = null; 
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (file) {
      // Vérifie que c'est une image
      if (!file.type.startsWith('image/')) {
        alert('Veuillez sélectionner une image valide.');
        return;
      }

      // Met à jour le formulaire avec "img/nom-du-fichier.jpg"
      const fileName = file.name;
      this.addNews.patchValue({ photo: `images/${fileName}` });

      // Prévisualisation de l'image
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imagePreview = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  };
  msg:string="";
  userTab:any=JSON.parse(localStorage.getItem("User")||"[]");
  AddNews(){
    for (let i = 0; i < this.userTab.length; i++) {
     if (this.addNews.value.Email==this.userTab[i].Email && this.addNews.value.Pwd==this.userTab[i].Pwd && this.userTab[i].role=="admin") {
      let NewsTab=JSON.parse(localStorage.getItem("News")||"[]");
  NewsTab.push(this.addNews.value);
  localStorage.setItem("News",JSON.stringify(NewsTab))
  this.msg=""
     }else{
      this.msg="vous n'est pas admin";
     }
      
    }
     
  }
}
