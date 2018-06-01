import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'epp-popup',
  templateUrl: './epp-popup.component.html',
  styleUrls: ['./epp-popup.component.css']
})
export class EppPopupComponent implements OnInit {

  @Input() showPopup = false;
  @Input() showPopup1 = false;
  @Input() noButtonPopup = false;
  @Input() noButtonPopup1 = false;

  @Output() addClicked = new EventEmitter();
  @Output() closeClicked = new EventEmitter();
  @Output() closeClicked1 = new EventEmitter();

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

  closeButtonClicked1() {
    this.closeClicked1.emit();
  }
}
