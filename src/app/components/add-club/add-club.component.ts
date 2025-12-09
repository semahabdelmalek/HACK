import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-club',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './add-club.component.html',
  styleUrl: './add-club.component.css'
})
export class AddClubComponent implements OnInit {
  addClub!:FormGroup;
  constructor(private fb:FormBuilder){};
  ngOnInit(): void {
    this.addClub=this.fb.group({
      NameClub:["",[Validators.required,Validators.minLength(3),Validators.pattern(/^[\p{L}\s]+$/u)]],
      email:["",[Validators.required,Validators.email]],
      pwd:["",[Validators.required]],
      des:["",[Validators.required]],
      date:["",[Validators.required]],
      pr:["",[Validators.required]],
      logo:[""],

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
      this.addClub.patchValue({ logo: `images/${fileName}` });

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
  addClubs(){
    for (let i = 0; i < this.userTab.length; i++) {
     if (this.addClub.value.email==this.userTab[i].Email && this.addClub.value.pwd==this.userTab[i].Pwd && this.userTab[i].role=="admin") {
       let ClubTab=JSON.parse(localStorage.getItem("Club")||"[]");
  ClubTab.push(this.addClub.value);
  localStorage.setItem("Club",JSON.stringify(ClubTab))
     }else{
      this.msg="vous n'est pas admin";
     }
      
    }
     

  }

}
