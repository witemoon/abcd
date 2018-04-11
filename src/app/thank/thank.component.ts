import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thank',
  templateUrl: './thank.component.html',
  styleUrls: ['./thank.component.css']
})
export class ThankComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  temp(){
    console.log('signUp');
    this.router.navigate(['/temp']);
  }

}
