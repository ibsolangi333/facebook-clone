import { Component } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import {LoginServiceService} from '../services/login-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor
  (
    private loginFormBuilder:FormBuilder,
    private loginservice:LoginServiceService,
    private router:Router
  ){}
  signUpForm!:FormGroup
  submitted=false
  ngOnInit(){
    // login form
    // sign up form
    this.signUpForm = this.loginFormBuilder.group({
      firstname:['',Validators.required],
      surname:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]],
      day:['',Validators.required],
      month:['',Validators.required],
      year:['',Validators.required],
      gender:['',Validators.required]
    })
  }

  signUpSubmit(){
    console.log(this.signUpForm)
    this.submitted=true
    if(this.signUpForm.invalid){
      // alert('invalid')
      return
    }
    else{
      this.loginservice.postApi(this.signUpForm.value).subscribe((resuilt)=>{
        if(resuilt){
          // this.router.navigate(['home'])
        }
      });
      this.signUpForm.reset();
    }
  }
  select=true
  hideSignUpForm(){}
}
