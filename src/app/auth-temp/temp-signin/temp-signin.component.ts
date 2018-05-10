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
        try{
          // this.authService.currentMerchantId = res['responseData'].merchantId;
          // this.authService.setToken(res['responseData'].token);
          localStorage.setItem("referenceKey", res['responseData'].referenceKey);
          localStorage.setItem("token", res['responseData'].token);
        }catch(e){
          console.log('---error happened----',e);
        }
        if(res['responseData'].firstTimeUser){
          
            this.authService.currentEmail = email;
            this.router.navigate(['/signchangepass']);
        }
        // if(res['message']=""){ // write the proper message while login in with temp password...
        //   this.authService.currentEmail = email;
        //   this.router.navigate(['/signchangepass']);
        // }
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
