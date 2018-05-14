import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'error401',
  templateUrl: './error401.component.html',
  styleUrls: ['./error401.component.css']
})
export class Error401Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  loginclick(){
    this.router.navigate(['user/signin']);
  }

}
