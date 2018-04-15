import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {NgForm, FormControl} from "@angular/forms";
import 'rxjs/add/operator/filter';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

/*TEst*/

  currentTab = 'signup';
  referenceKeyFC = new FormControl();
  leaseNumberFC = new FormControl();
  merchantDbaFC = new FormControl();

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

  leaseNumberFirstTime = true;
  ngOnInit() {
    // 052-5234567-098
    this.leaseNumberFC.valueChanges.subscribe(value=>{
      let isnumber = this.isNumeric(value)
      console.log(value , isnumber)
      if(this.leaseNumberFirstTime){
        this.leaseNumberFirstTime = false;
      }else{
            let finalStr = value;
            finalStr =  this.removeChar(value);
            if(value.length==4 && value.charAt(3)!='-'){
              let st = value.substr(0,3)+'-'+value.substr(3,1);
              console.log('setting formcontrol by -',st);
              finalStr = st;
            }
            if(value.length==12 && value.charAt(11)!='-'){
              let st = value.substr(0,11)+'-'+value.substr(11,1);
              console.log('setting formcontrol by -',st)
              finalStr = st;
            }
            if(finalStr!=value){
              this.leaseNumberFC.setValue(finalStr);
            }
      }
      //---------for removing alphabets starts-------
      // for(let i=0;i<value.length;i++){
      //   if(i==3 || i==11){continue}
      //   if( !this.isNumeric(value.charAt(i)) ){this.leaseNumberFC.setValue(value.substr(0,value.length-1))}
      // }
       //---------for removing alphabets ends-------

    })
  }

  isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  removeChar(value){
    let finalStr;
    for(let i=0;i<value.length;i++){
      if(i==3 || i==11){}else{
        console.log('---i----'+i+'---'+value)
      if( !this.isNumeric(value.charAt(i)) ){
        let st = value.substr(0,value.length-1);
        console.log('-inside removeing--i----'+i+'---'+value)
        console.log('setting formcontrol by removing on char',st)
        finalStr = st;
      }
      }
    }
    return finalStr || value;
  }

  signUpUser(signUpForm){

    var refKey=signUpForm.value.referenceKey;
    var leaseNo=signUpForm.value.leaseNumber;
    var merchantDBA=signUpForm.value.merchantDBA.toLowerCase();
    if(refKey=="123456789" && this.leaseNumberFC.value=="052-5234567-098" && merchantDBA=="abc bbq and burgers"){

      this.router.navigate(['/thankyou']);
      //console.log('valid');
    }
    else{
      console.log(refKey, refKey=="123456789",this.leaseNumberFC.value,this.leaseNumberFC.value=="052-5234567-098", merchantDBA, merchantDBA=="abc bbq and burgers");

      console.log('Not Valid')
    }

  }
  signInError = false;
  singInSuccess = true;
  signInRegular(signInReg){
   var email=signInReg.value.email.toLowerCase();
   var passwordReg=signInReg.value.password;
   if(email=="demo2@test.com" && passwordReg=="Demo2@123"){
     this.router.navigate(['/dashboard/home']);
     this.signInError = false;
     this.singInSuccess = false;
   }
   else{
     this.signInError = true;
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
