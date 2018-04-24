import { Component, OnInit, Output } from '@angular/core';
import { DashboardServiceService } from '../../dashboard-service.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'lease-tabs',
  templateUrl: './lease-tabs.component.html',
  styleUrls: ['./lease-tabs.component.css']
})
export class LeaseTabsComponent implements OnInit {
  
  openPopup = false;
  showTabs = false;
  selectedLease={ };
  @Output() equipmentcoverage=new EventEmitter();
  constructor(private dashboardService:DashboardServiceService) { }

  ngOnInit() {
    this.dashboardService.selectedLeaseObj.subscribe(data=>{
      this.selectedLease = data;
      if( null ){
        let checkNull="";
        this.equipmentcoverage.emit(checkNull);
      }
      this.showTabs = true;
    })
  }


  showAlerts(){
    this.openPopup = true;
  }
}
