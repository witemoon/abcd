import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.css']
})
export class LeftSideBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  lftSide = false;
  lftSideBut = false;
 sidebarLft() {
    // var lftSide = document.getElementById("SidenavLft");
    // var lftSideBut = document.getElementById("SidenavLftBut");
    // lftSide.classList.toggle("ctrlWidthLft");
    // lftSideBut.classList.toggle("tbut");
    // lftSideBut.classList.toggle("ctrlWidthLftB");
    this.lftSide = !this.lftSide;
    this.lftSideBut = !this.lftSideBut;
}

}
