import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FormGroup ,FormControl } from '@angular/forms';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private router:Router) { }
  urlEmail = "";
  ngOnInit() {
    // console.log('----router----',this.router)
    this.urlEmail = this.router.url.replace('/login/',"")
    this.urlEmail  = this.urlEmail.replace('/login','')
    this.router.events
    .filter(event => event instanceof NavigationEnd)
    .subscribe((event:NavigationEnd) => {
      this.urlEmail = event.url.replace('/login/',"");
      // console.log('---------url email---------',this.urlEmail)
    });
   
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
