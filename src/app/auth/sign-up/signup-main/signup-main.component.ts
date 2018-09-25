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
  locked: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  ctab(s) {
    this.showstat = s == 'signin' ? true : false;
    console.log("inside main----", this.showstat)
  }

  updateStatDescription(obj) {
    if (obj.includes("locked") || obj.includes("registration")) {
      this.locked = true;
      this.heading = obj.includes("locked") ? "Your account has been locked!" : "There was a problem with your registration";
      this.description = "Please contact customer service at:";
    } else if (obj.includes("registered")) {
      this.heading = "You already have an account with us.";
      this.description = "Please Sign In or tap on <b>Forgot Password</b> from the sign in page";
    } else {
      this.heading = "";
      this.description = "";
    }
  }
}
