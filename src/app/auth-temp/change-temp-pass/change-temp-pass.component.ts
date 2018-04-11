import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-temp-pass',
  templateUrl: './change-temp-pass.component.html',
  styleUrls: ['./change-temp-pass.component.css']
})
export class ChangeTempPassComponent implements OnInit {
 

  constructor(private router:Router) { }

  ngOnInit() {
  }
  signIn(){
    this.router.navigate(['/login']);
  }

}
