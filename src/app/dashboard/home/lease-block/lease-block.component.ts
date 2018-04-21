import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from '../../dashboard-service.service';

@Component({
  selector: 'lease-block',
  templateUrl: './lease-block.component.html',
  styleUrls: ['./lease-block.component.css']
})
export class LeaseBlockComponent implements OnInit {

  constructor(private dashboardService:DashboardServiceService) { }

  leaseArray = [] ;
  ngOnInit() {
    this.dashboardService.leaseData.subscribe(data=>{
      this.leaseArray = data['lease'];
    })
  }

}
