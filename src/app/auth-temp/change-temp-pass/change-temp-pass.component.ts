import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-change-temp-pass',
  templateUrl: './change-temp-pass.component.html',
  styleUrls: ['./change-temp-pass.component.css']
})
export class ChangeTempPassComponent implements OnInit {
  showError: boolean = false;
  passwordNew: string = "";

  @ViewChild("tmpPass") tmpPass: ElementRef;
  @ViewChild("cPass") cPass: ElementRef;
  @ViewChild("captchaRef") captcha;

  passwordFC = new FormControl();

  upperAndLowerCase = false;
  number = false;
  splChar = false;
  eightChar = false;
  validationError: any = {
    "tempPasswordError": false,
    "newPasswordError": false,
    "confirmPasswordError": false
  };

  constructor(private router:Router) { }

  ngOnInit() {
    this.passwordFC.valueChanges.subscribe(value=>{
      if(this.hasLowerCase(value) && this.hasUpperCase(value)){
        this.upperAndLowerCase = true;
      }else{
        this.upperAndLowerCase = false;
      }
      if(this.hasNumber(value)){
        this.number = true;
      }
      else{
        this.number = false;
      }
      if(this.hasSpecialChar(value)){
        this.splChar = true;
      }
      else{
        this.splChar = false;
      }
      if(value.length>8){
        this.eightChar = true;
      }else{
        this.eightChar = false;
      }
    });
  }

  changePassword(changePass){

   var tempPass = changePass.value.tempPass;
   var newPass = this.passwordFC.value;
   var cnfPass = changePass.value.confPassword;

   if (tempPass == ""){
      this.validationError.tempPasswordError = true;
   } else if (!newPass && !cnfPass && !tempPass) {
     this.validationError.tempPasswordError = true;
     this.validationError.confirmPasswordError = true;
     this.validationError.newPasswordError = true;
     this.captcha.reset();
   } else if(newPass && cnfPass && (newPass == cnfPass)){
      this.router.navigate(['/user/signin']);
   } else{
      this.captcha.reset();
      this.cPass.nativeElement.value = "";
      this.validationError.confirmPasswordError = true;
    }
   }
  

  validate(event){
    if(this.passwordNew.length > 8){
      this.showError = false;
    }else{
      this.showError = true;
    }
    return true
  }

  hasLowerCase(str) {
    return (/[a-z]/.test(str));
  }

  hasUpperCase(str){
    return (/[A-Z]/.test(str));
  }

  hasNumber(str){
    return (/[0-9]/.test(str));
  }

  hasSpecialChar(str){
    return (/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/).test(str);
  }
}
