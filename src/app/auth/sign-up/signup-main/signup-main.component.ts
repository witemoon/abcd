import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-main',
  templateUrl: './signup-main.component.html',
  styleUrls: ['./signup-main.component.css']
})
export class SignupMainComponent implements OnInit {
  showstat = false;
  heading: String = "";
  description: String = "";

  constructor() { }

  ngOnInit() {
  }

  ctab(s){
    this.showstat = s == 'signin' ? true : false;
    console.log("inside main----",this.showstat)
  }

  updateStatDescription(obj) {
    this.description = obj;
  }
}
