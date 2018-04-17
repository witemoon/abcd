import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signthank',
  templateUrl: './signthank.component.html',
  styleUrls: ['./signthank.component.css']
})
export class SignthankComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  temp(){
    console.log('signUp');
    this.router.navigate(['/temp']);
  }


}
