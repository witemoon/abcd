import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'alerts-popup',
  templateUrl: './alerts-popup.component.html',
  styleUrls: ['./alerts-popup.component.css']
})
export class AlertsPopupComponent implements OnInit {

  @Input() showPopup = false;
  constructor( private route:Router) { }

  ngOnInit() {
  }

  closeButtonClicked(){
    this.showPopup = false;
  }

}
