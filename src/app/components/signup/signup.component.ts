import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  sigunp!:FormGroup;
  constructor(private fb:FormBuilder){};
  ngOnInit(): void {
    this.sigunp=this.fb.group({
      cin:["",[Validators.required,Validators.pattern(/^[1-9]\d*$/),Validators.maxLength(8),Validators.minLength(8)]],
      FirstName:["",[Validators.required,Validators.minLength(3),Validators.pattern(/^[\p{L}\s]+$/u)]],
      LastName:["",[Validators.required,Validators.minLength(3),Validators.pattern(/^[\p{L}\s]+$/u)]],
      Email:["",[Validators.required,Validators.email]],
      tel:["",[Validators.required,Validators.pattern(/^[1-9]\d*$/),Validators.maxLength(8),Validators.minLength(8)]],
      Pwd:["",[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/),Validators.maxLength(8),Validators.minLength(8)]],
      role:[""],

    })
  }
  msg:string=""
  addEtudient(){
    if(this.sigunp.get('role')?.value==""){
      this.msg="check is requiard";

    }
    else{
      this.msg="";
      console.log("etudient:",this.sigunp.value)
    }
  }

}
