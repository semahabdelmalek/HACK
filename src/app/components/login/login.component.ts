import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private r:Router){};
  user:any={
    email:"",
    pwd:"",
    selectedRole:"",
  }
  msg:string="";
  addUser():void{
    if(this.user.selectedRole=="")
    {
      this.msg="check is requaird";
    }
    else{

      this.msg="";
      this.r.navigate(['/home']);
      console.log("user:",this.user)
    }
  }

}
