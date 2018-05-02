import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from '../../dashboard-service.service';
// import { dashboardData } from '../dashboard-model';

@Component({
  selector: 'lease-block',
  templateUrl: './lease-block.component.html',
  styleUrls: ['./lease-block.component.css']
})
export class LeaseBlockComponent implements OnInit {
  selectedLease = 0;
  leaseArray = [];

  constructor(private dashboardService:DashboardServiceService) {
  }

  ngOnInit() {
    this.dashboardService.changeObject.subscribe(data=>{
      if (data && data['leaseArray']) {
        let arrayOne = [];
        let arrayTwo = [];
        let arrayThree = [];
        let arrayFour = [];

        // this.leaseArray = data['leaseArray'];
        data['leaseArray'].forEach(item => {
          if(item.equipmentCoverage.equipmentCoverage == "No" && item['legalStatus'] == "Default") {
            arrayOne.push(item);
          } else if (item.equipmentCoverage.equipmentCoverage != "No" && item['legalStatus'] == "Default") {
            arrayTwo.push(item);
          } else if (item.equipmentCoverage.equipmentCoverage == "No" && item['legalStatus'] != "Default") {
            arrayThree.push(item);
          } else {
            arrayFour.push(item);
          }
        });

        arrayOne = this.sortByleaseNo(arrayOne);
        arrayTwo = this.sortByleaseNo(arrayTwo);
        arrayThree = this.sortByleaseNo(arrayThree);
        arrayFour = this.sortByleaseNo(arrayFour);

        this.leaseArray = arrayOne.concat(arrayTwo, arrayThree, arrayFour);
        this.dashboardService.selectedLeaseObj.next(this.leaseArray[0]);
      }
    });
  }

  sortByleaseNo(array) {

    array.sort((a, b)=> {
      return a.leaseNo.split("-")[1] > b.leaseNo.split("-")[1]
    });

    return array;
  }

  emitSelectedLeaseObj(selectedLease) {
    console.log(selectedLease);
    this.dashboardService.selectedLeaseObj.next(selectedLease);
  }
}
