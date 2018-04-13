import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'epp-popup',
  templateUrl: './epp-popup.component.html',
  styleUrls: ['./epp-popup.component.css']
})
export class EppPopupComponent implements OnInit {
  
  @Input() showPopup = false;
  constructor() { }

  ngOnInit() {
  }

  closeButtonClicked(){
    this.showPopup = false;
  }

}
