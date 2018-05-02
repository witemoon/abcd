import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from './dashboard-service.service';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dashboardService:DashboardServiceService, private authService:AuthService) { }

  ngOnInit() {
    let referenceKey = this.authService.currentReferenceKey;
    // this.dashboardService.getLeaseData(merchantid).subscribe(data=>{
    //   console.log('-----lease data received-------',data);
    //   this.dashboardService.leaseData.next(data['responseData']);
    // },err=>{
    //   console.log('----- get lease data error-------',err);
    // });
  }

}
