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

  constructor(private router:Router, private authService:AuthService) { }

  ngOnInit() {
    
  }
  forgotPass(resetPass){
    var email=resetPass.value.email;
    this.authService.forgetPassword({}).subscribe(res=>{
      if(res['status']=='Success'){
        this.router.navigate(['/thankyou']);
      }
    },error=>{
      console.log('change password fail',error);
    });

    // if(email=="demo2@test.com"){
    //   this.router.navigate(['/thankyou']);
    // }
    // else{
    //   console.log('change password fail');
    // }
  }
  
}
