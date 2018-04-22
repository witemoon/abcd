import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from '../../dashboard-service.service';

@Component({
  selector: 'lease-tabs',
  templateUrl: './lease-tabs.component.html',
  styleUrls: ['./lease-tabs.component.css']
})
export class LeaseTabsComponent implements OnInit {
  
  openPopup = false;
  showTabs = false;
  selectedLease={ };
  constructor(private dashboardService:DashboardServiceService) { }

  ngOnInit() {
    this.dashboardService.selectedLeaseObj.subscribe(data=>{
      this.selectedLease = data;
      this.showTabs = true;
    })
  }

  showAlerts(){
    this.openPopup = true;
  }
}
