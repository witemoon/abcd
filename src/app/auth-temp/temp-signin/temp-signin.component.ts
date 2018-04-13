import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-temp-signin',
  templateUrl: './temp-signin.component.html',
  styleUrls: ['./temp-signin.component.css']
})
export class TempSigninComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  tempSignInUser(tempSignIn){
    var email=tempSignIn.value.email;
    var tempPass=tempSignIn.value.tempPass;
    if(email=="demo2@test.com" && tempPass=="Photon123"){
      this.router.navigate(['/changeTempPass'])
    }
    else{
      console.log('failded!')
    }
    
  }

  

}
