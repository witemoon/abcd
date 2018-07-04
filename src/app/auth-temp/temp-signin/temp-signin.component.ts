import { Component, OnInit,Input } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../../shared/auth.service';
import { SharedService } from '../../shared/shared';

@Component({
  selector: 'app-temp-signin',
  templateUrl: './temp-signin.component.html',
  styleUrls: ['./temp-signin.component.css']
})
export class TempSigninComponent implements OnInit {
  // loaderStatus = false;
  email:string;
  constructor(private router:Router,  private authService:AuthService, private activatedRoute:ActivatedRoute,  public loader: SharedService) {
   
  }
  showError = false; 

  ngOnInit() { 
    this.activatedRoute.queryParams.subscribe(
      data => {this.email =data.email
       
       console.log('queryParams', data['email'])
       if(data['email']){
           let encodedName = encodeURI(data['email']);       
           let str = encodedName.replace("%20","%2B");         
           let encodedURI = decodeURI(str);           
           this.email= decodeURIComponent(str);
         }      
       });
        }
  tempSignInUser(tempSignIn){
    // this.loaderStatus=true;
    this.loader.loaderStatus.next(true);
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
      // this.loaderStatus=false;
      this.loader.loaderStatus.next(false);
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
      // this.loaderStatus=false;
      this.loader.loaderStatus.next(false);
      this.showError = true;
      console.log('temp login faild',error);
     });

  }



}
