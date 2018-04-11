import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  openPopup = false;

  constructor() { }

  ngOnInit() {
  }

  showAlerts(){
    this.openPopup = true;
  }

}
