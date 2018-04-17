import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-signchangepass',
  templateUrl: './signchangepass.component.html',
  styleUrls: ['./signchangepass.component.css']
})
export class SignchangepassComponent implements OnInit {

  showError: boolean = false;
  passwordNew: string = "";

  @ViewChild("tmpPass") tmpPass: ElementRef;
  @ViewChild("cPass") cPass: ElementRef;

  passwordFC = new FormControl();

  upperAndLowerCase = false;
  number = false;
  splChar = false;
  eightChar = false;

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

   var tempPass=changePass.value.tempPass;
   var newPass=this.passwordFC.value;
   var cnfPass=changePass.value.confPassword;

   if(newPass==cnfPass && newPass!=="" && cnfPass!==""){
    if(tempPass=="Photon123" ){
      this.router.navigate(['/dashboard/home'])
   }

   }
   else{
     console.log('Failed',this.tmpPass);
    if(!this.tmpPass.nativeElement.validity.valid){
      console.log(changePass);
      this.tmpPass.nativeElement.value = "";
    }
    if(!this.passwordFC.valid){
      this.passwordFC.setValue("");
      this.cPass.nativeElement.value = "";
    }
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