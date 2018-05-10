import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-signup-stat',
  templateUrl: './signup-stat.component.html',
  styleUrls: ['./signup-stat.component.css']
})
export class SignupStatComponent implements OnInit {
  locked: boolean = false;
  @Input() heading;
  @Input() description;

  constructor() { }

  ngOnInit() {
    if (!this.heading) {
      this.heading = "Managing Your Lease";
    }

    if (!this.description) {
      this.description = "You are but only a few steps away from managing your lease(s).";
    }

    if (this.description.includes("locked")) {
      this.locked = true;
      this.heading = "Your account has been locked!";
      this.description = "Please contact customer service at:";
    }
  }

}
