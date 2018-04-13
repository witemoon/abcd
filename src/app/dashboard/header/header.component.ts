import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from '../dashboard-service.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  openPopup = false;
  leaseData = {};
  constructor(private dashboardService:DashboardServiceService) { }

  ngOnInit() {
    this.dashboardService.leaseData.subscribe(data=>{
      this.leaseData = data;
      this.leaseData['Leases'].forEach(item=>{
        
      })
    })
  }

  showAlerts(){
    this.openPopup = true;
  }

}
