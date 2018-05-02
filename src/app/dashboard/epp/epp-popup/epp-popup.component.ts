import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'epp-popup',
  templateUrl: './epp-popup.component.html',
  styleUrls: ['./epp-popup.component.css']
})
export class EppPopupComponent implements OnInit {

  @Input() showPopup = false;
  @Input() noButtonPopup = false;

  @Output() addClicked = new EventEmitter();
  @Output() closeClicked = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  addButtonClicked() {
    this.addClicked.emit();
  }

  closeButtonClicked() {
    this.closeClicked.emit();
  }
}
