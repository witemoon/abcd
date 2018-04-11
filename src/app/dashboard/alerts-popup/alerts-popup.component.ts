import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'alerts-popup',
  templateUrl: './alerts-popup.component.html',
  styleUrls: ['./alerts-popup.component.css']
})
export class AlertsPopupComponent implements OnInit {

  @Input() showPopup = false;
  constructor() { }

  ngOnInit() {
  }

  closeButtonClicked(){
    this.showPopup = false;
  }

}
