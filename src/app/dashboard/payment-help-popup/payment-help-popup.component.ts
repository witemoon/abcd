import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'payment-help-popup',
  templateUrl: './payment-help-popup.component.html',
  styleUrls: ['./payment-help-popup.component.css']
})
export class PaymentHelpPopupComponent implements OnInit {

  @Input() showPopup = false;
  constructor() { }

  ngOnInit() {
  }

  closeButtonClicked(){
    this.showPopup = false;
  }


}
