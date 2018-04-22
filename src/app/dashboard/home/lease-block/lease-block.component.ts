import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from '../../dashboard-service.service';

@Component({
  selector: 'lease-block',
  templateUrl: './lease-block.component.html',
  styleUrls: ['./lease-block.component.css']
})
export class LeaseBlockComponent implements OnInit {

  constructor(private dashboardService:DashboardServiceService) { }
  selectedLease = 0;
  leaseArray = [] ;
  selectLeaseObject = {};
  ngOnInit() {
    this.dashboardService.leaseData.subscribe(data=>{
      this.leaseArray = data['lease'];
      this.selectLeaseObject = this.leaseArray[0];
      this.emitSelectedLeaseObj(this.selectLeaseObject);
    })
  }

  emitSelectedLeaseObj(obj){
    this.dashboardService.selectedLeaseObj.next(obj);
  }

}
