import {Component, OnInit} from '@angular/core';
import {DashboardServiceService} from '../../dashboard-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'lease-tabs',
  templateUrl: './lease-tabs.component.html',
  styleUrls: ['./lease-tabs.component.css']
})
export class LeaseTabsComponent implements OnInit {
  openBuyOutInfo=false;
  openPopup = false;
  showTabs = false;
  selectedLease = {};

  constructor(private router:Router,private dashboardService: DashboardServiceService) {
  }

  ngOnInit() {
    this.dashboardService.selectedLeaseObj.subscribe(data => {
      this.selectedLease = data;
      this.showTabs = true;
    })
  }

  showBuyOutMsg(s){
    this.openBuyOutInfo =s;
  }

  showAlerts() {
    this.openPopup = true;
  }
  ec(){
    if( this.selectedLease['equipmentCoverage'] && this.selectedLease['equipmentCoverage']['equipmentCoverage'] && this.selectedLease['equipmentCoverage']['equipmentCoverage']=='No'){

      this.router.navigate(['/dashboard/epp']);
    }
  }
}


