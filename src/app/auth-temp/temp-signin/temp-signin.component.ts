import { Component, OnInit,Input } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-temp-signin',
  templateUrl: './temp-signin.component.html',
  styleUrls: ['./temp-signin.component.css']
})
export class TempSigninComponent implements OnInit {
  email:string;
  constructor(private router:Router,  private authService:AuthService, private activatedRoute:ActivatedRoute) {
   
  }
  showError = false; 

  ngOnInit() { 
      this.activatedRoute.queryParams.subscribe(
      data => {this.email = data.email
      console.log('queryParams', data['email'])});         
  }
  tempSignInUser(tempSignIn){
    var email=tempSignIn.value.email;
    var tempPass=tempSignIn.value.tempPass;
    let str = btoa(tempPass);
    console.log("str",str)
    let data = [];
    for (var i = 0; i < str.length; i++){  
        data.push(str.charCodeAt(i));
    }
    tempPass = data;
    console.log("tempPass",data);
    // if(email=="demo2@test.com" && tempPass=="Photon123"){
    //   this.router.navigate(['/signchangepass'])
    // }
    // else{
    //   console.log('failded!')
    // }
    let payLoad = {
     "emailId": this.email,
     "password":  tempPass
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
