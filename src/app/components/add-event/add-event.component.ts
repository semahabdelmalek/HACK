import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css'
})
export class AddEventComponent implements OnInit {
  addEvent!:FormGroup;
  constructor(private fb:FormBuilder){};
  ngOnInit(): void {
    this.addEvent=this.fb.group({
      Email:["",[Validators.required,Validators.email]],
      Pwd:["",[Validators.required]],
      tit:["",[Validators.required]],
      des:["",[Validators.required]],
      loc:["",[Validators.required]],
      date:["",[Validators.required]],
      club:["",[Validators.required]],
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
      this.addEvent.patchValue({ photo: `images/${fileName}` });

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
  AddEvent(){
    for (let i = 0; i < this.userTab.length; i++) {
     if (this.addEvent.value.Email==this.userTab[i].Email && this.addEvent.value.Pwd==this.userTab[i].Pwd && this.userTab[i].role=="admin") {
       let ClubTab=JSON.parse(localStorage.getItem("Event")||"[]");
  ClubTab.push(this.addEvent.value);
  localStorage.setItem("Event",JSON.stringify(ClubTab))
  this.msg=""
     }else{
      this.msg="vous n'est pas admin";
     }
      
    }
  }

}
