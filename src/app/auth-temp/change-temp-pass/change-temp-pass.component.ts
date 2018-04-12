import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-change-temp-pass',
  templateUrl: './change-temp-pass.component.html',
  styleUrls: ['./change-temp-pass.component.css']
})
export class ChangeTempPassComponent implements OnInit {
 

  constructor(private router:Router) { }

  ngOnInit() {
   
  }
 
  changePassword(changePass){
   var tempPass=changePass.value.tempPass;
   var newPass=changePass.value.newPass;
   var cnfPass=changePass.value.confPassword;
   if(tempPass=='Photon123' && newPass=='12345' && cnfPass=='12345'){
      this.router.navigate(['/'])
   }
   else{
     console.log('Failed');

   }
  }

}
