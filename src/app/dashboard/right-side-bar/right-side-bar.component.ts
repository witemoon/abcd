import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'right-side-bar',
  templateUrl: './right-side-bar.component.html',
  styleUrls: ['./right-side-bar.component.css']
})
export class RightSideBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  rytSide = false;
  rytSideBut = false;
  sidebarRyt() {
    // var rytSide = document.getElementById("SidenavRyt");
    // var rytSideBut = document.getElementById("SidenavRytBut");
    // rytSide.classList.toggle("ctrlWidthRyt");
    // rytSideBut.classList.toggle("tbut");
    // rytSideBut.classList.toggle("ctrlWidthRytR");
    this.rytSide = !this.rytSide;
    this.rytSideBut = !this.rytSideBut;
}

}
