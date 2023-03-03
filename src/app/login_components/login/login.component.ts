import { DatePipe, getLocaleDateFormat } from '@angular/common';
import { Component } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // login form
  loginForm!: FormGroup ;
  submitted:boolean = false;
  select:boolean = true;
  signUpDisplay:boolean = false;
  constructor(private loginFormBuilder:FormBuilder, private router:Router){}

  ngOnInit(){
    this.loginForm = this.loginFormBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required],
    })
  }

  loginSubmit(){
    this.submitted=true
    if(this.loginForm.invalid){ 
      // console.log(this.loginForm.value.email)
      return
    }
    else{
      this.router.navigate(['home'])
    }
  }

  openSingUpForm(){
    this.signUpDisplay=true  
  }
  hideSignUpForm(){
    this.signUpDisplay=false
  }
}
