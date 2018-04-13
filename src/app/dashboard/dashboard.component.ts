import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from './dashboard-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dashboardService:DashboardServiceService) { }

  ngOnInit() {
    this.dashboardService.getLeaseData().subscribe(data=>{
      console.log('-----lease data received-------',data);
      this.dashboardService.leaseData.next(data);
    });
  }

}
