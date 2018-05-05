import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-main',
  templateUrl: './signup-main.component.html',
  styleUrls: ['./signup-main.component.css']
})
export class SignupMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  showstat = false;
  ctab(s){
    this.showstat = s=='signin'?true:false;
    console.log("inside main----",this.showstat)
  }

}
