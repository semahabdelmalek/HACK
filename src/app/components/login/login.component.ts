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
   
  tabUser:any=JSON.parse(localStorage.getItem("User")||"[]");
  msg:string="";
  addUser():void{
    if(this.user.selectedRole=="")
    {
      this.msg="check is requaird";
    }
    else{

      this.msg="";
      if(this.user.selectedRole=="admin"){
        for (let i = 0; i < this.tabUser.length; i++) {
        if(this.user.email==this.tabUser[i].Email && this.user.pwd==this.tabUser[i].Pwd)
        {
          this.r.navigate(['/home']);
        }else{
          this.msg="this admin n'exsite pas";
        }
      }
      }else{
        this.r.navigate(['/home']);
      }
      
     
      
    }
  }

}
