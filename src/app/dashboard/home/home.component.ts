import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from '../dashboard-service.service';
import { Router } from '@angular/router';
// import { dashboardData } from './dashboard-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  equipmentBadgeCount = 0;
  defaultLeaseBadgeCount = 0;

  constructor(private dashboardService: DashboardServiceService, private router:Router) { }

  ngOnInit() {
    let leaseArray = [];
    this.dashboardService.getLeaseData("").subscribe(data=>{
      
      if (data && data['responseData']) {
        // let data = dashboardData;
        let totalBadgeCount = 0;
        let totalEquipmentBadgeCount = 0;
        let totalDefaultLeaseBadgeCount = 0;

        leaseArray = data['responseData']['lease'];
        // this.selectLeaseObject = this.leaseArray[0];
        // this.emitSelectedLeaseObj(this.selectLeaseObject);

        leaseArray.forEach(item=>{
          this.equipmentBadgeCount = 0;
          this.defaultLeaseBadgeCount = 0;

          if (item['equipmentCoverage'] && item['equipmentCoverage']['equipmentCoverage'] && item['equipmentCoverage']['equipmentCoverage'] == "No") {
            this.equipmentBadgeCount = 1;
            totalEquipmentBadgeCount++;
          }

          if (item['legalStatus'] == "Default") {
            this.defaultLeaseBadgeCount = 1;
            totalDefaultLeaseBadgeCount++;
          }

          item['cardAlert'] = this.equipmentBadgeCount + this.defaultLeaseBadgeCount;
          totalBadgeCount += item['cardAlert'];
        });

        // this.dashboardService.selectedLeaseObj.emit()
        this.dashboardService.changeObj({"totalBadgeCount": totalBadgeCount, "totalEquipmentBadgeCount": totalEquipmentBadgeCount, "totalDefaultLeaseBadgeCount": totalDefaultLeaseBadgeCount, "leaseArray": leaseArray });
        this.dashboardService.leaseData.next(data['responseData']);
      }
    },err=>{
      console.log('----- get lease data error-------',err);
      if(err['error']['statusCode']=='401'){
        console.log('-------error code 401--------redirect here----')
        this.router.navigate(['/error401']);
      }
      if(err['error']['statusCode']=='500' || err['error']['statusCode']=='501' || err['error']['statusCode']=='503'){
        console.log('-------error code 500,501,503--------redirect here----')
        this.router.navigate(['/serviceerrors']);
      }
    });
  }
}
