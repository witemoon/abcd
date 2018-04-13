import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup ,FormControl } from '@angular/forms';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private router:Router) { }
    
  ngOnInit() {
    
   
  }

  regularSignIn(regSignIn){
   var email=regSignIn.value.email;
   var password=regSignIn.value.password;
   if(email=="demo2@test.com" && password=="Photon123"){
     this.router.navigate(['/changeTempPass']);
   }
   else{
     console.log('failed');
   }

  

  }
  resetRegPassword(){
    this.router.navigate(['/resetPassword'])
  }

}
