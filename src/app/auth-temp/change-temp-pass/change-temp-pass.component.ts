import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-change-temp-pass',
  templateUrl: './change-temp-pass.component.html',
  styleUrls: ['./change-temp-pass.component.css']
})
export class ChangeTempPassComponent implements OnInit {
  showError: boolean = false;
  passwordNew: string = "";
  constructor(private router:Router) { }

  ngOnInit() {

  }

  changePassword(changePass){
   var tempPass=changePass.value.tempPass;
   var newPass=changePass.value.passwordNew;
   var cnfPass=changePass.value.confPassword;

   if(newPass==cnfPass && newPass!=="" && cnfPass!==""){
    if(tempPass=="Photon123" ){
      this.router.navigate(['/'])
   }

   }
   else{
     console.log('Failed');

   }
  }

  validate(){
    if(this.passwordNew.length > 8){
      this.showError = false;
    }else{
      this.showError = true;
    }
    return true
  }

}
