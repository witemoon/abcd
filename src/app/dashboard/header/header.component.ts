import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DashboardServiceService } from '../dashboard-service.service';
declare var $;
@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  openPopup = false;
  leaseData = {};
  alertCount: any = {
    "totalBadgeCount": 0,
    "totalEquipmentCount": 0,
    "totalDefaultBadgeCount": 0
  };

  constructor(private dashboardService:DashboardServiceService) {

   }
   ngAfterViewInit(): void {
    
    $('#capital-trigger').on('click touch', function(){
      console.log('-----------clicked triger----------')
      $('#capital-tooltip').show();
    });         
     
    $(document).on('click touch', function(event) {
      if (!$(event.target).parents().addBack().is('#capital-trigger')) {
        $('#capital-tooltip').hide();
      }
    });

    $('#capital-tooltip').on('click touch', function(event) {
      event.stopPropagation();
    });
    
  }

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
