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
  alertCount: any = {
    "totalBadgeCount": 0,
    "totalEquipmentCount": 0,
    "totalDefaultBadgeCount": 0
  };

  constructor(private dashboardService:DashboardServiceService) { }

  ngOnInit() {
    this.dashboardService.changeObject.subscribe(data=>{
      if (data && data['totalBadgeCount']) {
        this.alertCount.totalBadgeCount = data['totalBadgeCount'];
        this.alertCount.totalEquipmentCount  = data['totalEquipmentBadgeCount'];
        this.alertCount.totalDefaultBadgeCount = data['totalDefaultLeaseBadgeCount'];
      }
    });
  }

  showAlerts(){
    this.openPopup = true;
  }

}
