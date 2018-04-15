import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {NgForm} from "@angular/forms";
import 'rxjs/add/operator/filter';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

/*TEst*/

  currentTab = 'signup';

  constructor(private router:Router) { 
    this.router.events
    .filter(event => event instanceof NavigationEnd)
    .subscribe((event:NavigationEnd) => {
      console.log('-------router event----------',event)
      if(event.url=='/user/signin'){
        this.currentTab = 'signin';
      }else{
        this.currentTab = 'signup';
      }
    });
  }

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
    this.router.navigate(['/user/signin']);
  }
  resetRegPassword(){
    this.router.navigate(['/resetPassword'])
  }
  backToLandingPage(){
    this.router.navigate(['/']);
  }
 







}
