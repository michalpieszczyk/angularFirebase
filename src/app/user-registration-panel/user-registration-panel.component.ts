import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from './user';
//import { Console } from 'console';

@Component({
  selector: 'app-user-registration-panel',
  templateUrl: './user-registration-panel.component.html',
  styleUrls: ['./user-registration-panel.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})


export class UserRegistrationPanelComponent implements OnInit {
  
  user;
  profileFormReg;
  profileFormSign;
  flaga = 0;

  constructor(private http: HttpClient) {
    
   }

  ngOnInit(): void {

      this.profileFormReg = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]), 
      first_name: new FormControl('', [Validators.required]), 
      last_name: new FormControl('', [Validators.required]), 
  
    });

    this.profileFormSign=new FormGroup({
      userNameSign: new FormControl('', [Validators.required]),
      passwordSign: new FormControl('', [Validators.required])
    })

  }
 ////////////////////////////////////////////////////////////// 
  RegisterUser(){

    this.user= new User();
    // TODO: Use EventEmitter with form valu
    this.user.userName=this.profileFormReg.value.userName;
    this.user.email=this.profileFormReg.value.email;
    this.user.password=this.profileFormReg.value.password;
    this.user.first_name=this.profileFormReg.value.first_name;
    this.user.last_name=this.profileFormReg.value.last_name;
    // console.warn(this.user.userName);
    // console.warn(this.user.email);
    // console.warn(this.user.password);

    this.http.post
    (
      "http://localhost:8000/user/sign_up", 
      { 
        username:this.user.userName, 
        email:this.user.email, 
        password:this.user.password,
        first_name:this.user.first_name,
        last_name:this.user.last_name
      }).subscribe()

      this.http.post
      (
        "http://localhost:8000/auth/token/", 
        { 
          username:this.user.userName, 
          password:this.user.password,
        }
      
      ).subscribe((data ) => {
        localStorage.setItem('token', data["access"])
  
  
        if (localStorage['token'] == data["access"])
        {
          window.location.href = 'http://localhost:4200/front-page';
        }
       } );

   
  }
///////////////////////////////////////////////////////////////
  SignInUser(){
    
    this.user= new User();
    this.user.userName=this.profileFormSign.value.userNameSign;
    this.user.password=this.profileFormSign.value.passwordSign;

    this.http.post
    (
      "http://localhost:8000/auth/token/", 
      { 
        username:this.user.userName, 
        password:this.user.password,
      }
    
    ).subscribe((data ) => {
      localStorage.setItem('token', data["access"])


      if (localStorage['token'] == data["access"])
      {
        window.location.href = 'http://localhost:4200/front-page';
      }
     } );

     
    
  }
}




