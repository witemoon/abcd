import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-land-head',
  templateUrl: './land-head.component.html',
  styleUrls: ['./land-head.component.css']
})
export class LandHeadComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  signUp(){
    console.log('signUp');
    this.router.navigate(['/user/signup']);
  }
  signIn(){
    console.log('signIN');
    this.router.navigate(['/user/signin']);
  }

}
