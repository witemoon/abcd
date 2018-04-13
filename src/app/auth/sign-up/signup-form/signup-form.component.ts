import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

/*TEst*/


  constructor(private router:Router) { }

  ngOnInit() {

  }
  signUpUser(signUpForm){

    var refKey=signUpForm.value.referenceKey;
    var leaseNo=signUpForm.value.leaseNumber;
    var merchantDBA=signUpForm.value.merchantDBA.toLowerCase();
    if(refKey=="123456789" && leaseNo=="052-5234567-098" && merchantDBA=="abc bbq and burgers"){

      this.router.navigate(['/thankyou']);
      //console.log('valid');
    }
    else{
      console.log(merchantDBA);

      console.log('Not Valid')
    }

  }
  signInRegular(signInReg){
   var email=signInReg.value.email.toLowerCase();
   var passwordReg=signInReg.value.password;
   if(email=="demo2@test.com" && passwordReg=="Demo2@123"){
     this.router.navigate(['/dashboard/home']);
    
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
  backToLandingPage(){
    this.router.navigate(['/']);
  }
 







}
