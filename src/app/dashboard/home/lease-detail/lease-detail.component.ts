import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from '../../dashboard-service.service';

@Component({
  selector: 'lease-detail',
  templateUrl: './lease-detail.component.html',
  styleUrls: ['./lease-detail.component.css']
})
export class LeaseDetailComponent implements OnInit {

  leaseData = {};

  constructor(private dashboardService:DashboardServiceService) { }

  ngOnInit() {
    this.dashboardService.leaseData.subscribe(data=>{
      this.leaseData = data;
    })
  }

}
