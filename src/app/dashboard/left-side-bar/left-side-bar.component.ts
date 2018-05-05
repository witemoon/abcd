import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';
import { DashboardServiceService } from '../dashboard-service.service';

@Component({
  selector: 'left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.css']
})
export class LeftSideBarComponent implements OnInit {

  leaseData = {};

  constructor(private router:Router,private authService:AuthService,private dashboardService:DashboardServiceService) { }
 showeol = false;
  ngOnInit() {
    this.dashboardService.leaseData.subscribe(data=>{
      this.leaseData = data;
      let leases = data['responseData']['lease'];
        let alleol = true;
        leases.forEach(item => {
          let leaseterm = parseInt( (""+item.contractStatus.leaseTerm).replace(" Months","") )
          let paymentsMade = parseInt( item.contractStatus.paymentsMade);
          if ( leaseterm-paymentsMade>=3) {
            alleol = false;
          }
        });
        if(alleol){
          this.showeol=true;
        }
  })
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
  console.log('This is not happening');
  this.authService.logOut().subscribe(res=>{
    console.log('logout Response:',res);
    this.router.navigate(['/user/signin']);
  },error=>{
    console.log('logout error-----',error);
  });
}

}
