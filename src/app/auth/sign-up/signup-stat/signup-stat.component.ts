import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-signup-stat',
  templateUrl: './signup-stat.component.html',
  styleUrls: ['./signup-stat.component.css']
})
export class SignupStatComponent implements OnInit {
  @Input() heading;
  @Input() description;
  @Input() locked;

  constructor() { }

  ngOnInit() {
    if (!this.heading) {
      this.heading = "Managing Your Lease";
    }

    if (!this.description) {
      this.description = "You are but only a few steps away from managing your lease(s).";
    }
  }
}
