import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup ,FormControl } from '@angular/forms';
import { AuthService } from '../../shared/auth.service';


@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  showError = false;
  validEmail: boolean = false;

  constructor(private router:Router, private authService:AuthService) { }

  ngOnInit() {
    
  }
  forgotPass(resetPass){
    
    this.showError = false;
    var email=resetPass.value.email.toLowerCase();
    this.authService.currentEmail = email;
    this.authService.forgetPassword({emailId:email}).subscribe(res=>{
      if(res['status']=='Success'){
        this.router.navigate(['/thankyou']);
      }
    },error=>{
      this.showError = true;
      console.log('change password fail',error);
    });

    // if(email=="demo2@test.com"){
    //   this.router.navigate(['/thankyou']);
    // }
    // else{
    //   console.log('change password fail');
    // }
  }

  onEmailEnter(event) {
    // let reg = /^[a-zA-Z0-9-_\.]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,3}(\.[a-zA-Z]{2})?$/;
    var reg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let email = event.target.value;

    if (reg.test(email)) {
      this.validEmail = true;
    }
  }
  
}
