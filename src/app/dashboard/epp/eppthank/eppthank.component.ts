import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eppthank',
  templateUrl: './eppthank.component.html',
  styleUrls: ['./eppthank.component.css']
})
export class EppthankComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  dboard() {
    console.log('dashboard/home');
    this.router.navigate(['/dashboard/home']);
  }
}