import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.css']
})
export class LeftSideBarComponent implements OnInit {

  constructor(private router:Router,private authService:AuthService) { }

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

logout(){
  this.authService.logOut().subscribe(res=>{ 
    console.log('logout Response:',res);
    this.router.navigate(['/user/signin']);
  });
}

}