import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {




  constructor(private router:Router) { }

  ngOnInit() {

  }
  signUpUser(signUpForm){
    var refKey=signUpForm.value.referenceKey;
    var leaseNo=signUpForm.value.leaseNumber;
    var merchantDBA=signUpForm.value.merchantDBA;
    if(refKey=='123456789' && leaseNo=='052-5234567-098' && merchantDBA=='ABC BBQ and Burgers'){

      this.router.navigate(['/thankyou']);
      //console.log('valid');
    }
    else{

      console.log('Not Valid')
    }

  }
  signInRegular(signInReg){
   var email=signInReg.value.email;
   var passwordReg=signInReg.value.password;
   if(email=='demo2@test.com' && passwordReg=='Demo2@123'){
     this.router.navigate(['/dashboard/home']);
     //console.log('test pass');
     //this.form.reset();
   }
   else{
     console.log('test faild');
   }
  }

  signInPageReg(){
    this.router.navigate(['/login']);
  }
  resetRegPassword(){
    this.router.navigate(['/resetPassword'])
  }





}
