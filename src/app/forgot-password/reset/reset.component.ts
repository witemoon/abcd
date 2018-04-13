import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup ,FormControl } from '@angular/forms';


@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    
  }
  forgotPass(resetPass){
    var email=resetPass.value.email;
    if(email=="demo2@test.com"){
      this.router.navigate(['/thankyou']);
    }
    else{
      console.log('change password fail');
    }
  }
  
}
