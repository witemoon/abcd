import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'serviceerrors',
  templateUrl: './serviceerrors.component.html',
  styleUrls: ['./serviceerrors.component.css']
})
export class ServiceerrorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('------came to 500,etc page------')
  }

}
