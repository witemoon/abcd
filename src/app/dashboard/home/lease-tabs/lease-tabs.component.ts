import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lease-tabs',
  templateUrl: './lease-tabs.component.html',
  styleUrls: ['./lease-tabs.component.css']
})
export class LeaseTabsComponent implements OnInit {
  
  openPopup = false;

  constructor() { }

  ngOnInit() {
  }

  showAlerts(){
    this.openPopup = true;
  }
}
