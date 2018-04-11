import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  
 
  constructor(private router:Router) { }

  ngOnInit() {
    
  }
  submit(){
    this.router.navigate(['/thankyou']);
  }
  resetPage(){
    this.router.navigate(['/resetPassword']);
  }

  signIn(){
    this.router.navigate(['**']);
  }
 
}
