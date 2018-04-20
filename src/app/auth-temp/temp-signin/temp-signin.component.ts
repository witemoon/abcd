import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-temp-signin',
  templateUrl: './temp-signin.component.html',
  styleUrls: ['./temp-signin.component.css']
})
export class TempSigninComponent implements OnInit {

  constructor(private router:Router,  private authService:AuthService) { }
  showError = false;

  ngOnInit() {
  }

  tempSignInUser(tempSignIn){
    var email=tempSignIn.value.email;
    var tempPass=tempSignIn.value.tempPass;
    // if(email=="demo2@test.com" && tempPass=="Photon123"){
    //   this.router.navigate(['/signchangepass'])
    // }
    // else{
    //   console.log('failded!')
    // }
    let payLoad = {
      "emailId": "" + email,
      "password": "" + tempPass
      }
    this.authService.signIn(payLoad).subscribe(res=>{
      if(res['status']=='Success'){
        if(res['message']=""){ // write the proper message while login in with temp password...
          this.authService.currentEmail = email;
          this.router.navigate(['/signchangepass']);
        }
      }
      else{
        this.showError = true;
        console.log('temp login faild',res);
      }
     },error=>{
      this.showError = true;
      console.log('temp login faild',error);
     });
    
  }

  

}
