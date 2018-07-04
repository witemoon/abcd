import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DashboardServiceService } from '../../dashboard-service.service';
import { SharedService } from '../../../shared/shared';
// import { dashboardData } from '../dashboard-model';
declare var $;

@Component({
  selector: 'lease-block',
  templateUrl: './lease-block.component.html',
  styleUrls: ['./lease-block.component.css']
})
export class LeaseBlockComponent implements OnInit, AfterViewInit {

  selectedLease = 0;
  leaseArray = [];

  constructor(private dashboardService:DashboardServiceService, private sharedService:SharedService) {
  }

  ngAfterViewInit(): void {

  }

  ngOnInit() {
    this.dashboardService.changeObject.subscribe(data=>{
      if (data && data['leaseArray']) {
        let arrayOne = [];
        let arrayTwo = [];
        let arrayThree = [];
        let arrayFour = [];
        let arrayFive = [];

        // this.leaseArray = data['leaseArray'];
        data['leaseArray'].forEach(item => {
          // console.log(parseInt(item.leaseNo.split("-")[1]));
          if(item.equipmentCoverage && item.equipmentCoverage.equipmentCoverage && item.equipmentCoverage.equipmentCoverage == "No" && item['legalStatus'] == "Default") {
            arrayOne.push(item);
          } else if (item.equipmentCoverage && item.equipmentCoverage.equipmentCoverage && item.equipmentCoverage.equipmentCoverage != "No" && item['legalStatus'] == "Default") {
            arrayTwo.push(item);
          } else if (item.equipmentCoverage && item.equipmentCoverage.equipmentCoverage && item.equipmentCoverage.equipmentCoverage == "No" && item['legalStatus'] != "Default") {
            arrayThree.push(item);
          } else if (item['legalStatus'] == "Upgrade Lease") {
            arrayFour.push(item);
          } else {
            arrayFive.push(item);
          }
            
          
        });

        arrayOne = this.sortByleaseNo(arrayOne);
        arrayTwo = this.sortByleaseNo(arrayTwo);
        arrayThree = this.sortByleaseNo(arrayThree);
        arrayFour = this.sortByleaseNo(arrayFour);
        arrayFive = this.sortByleaseNo(arrayFive);

        this.leaseArray = arrayOne.concat(arrayTwo, arrayThree, arrayFour,arrayFive);
        this.dashboardService.selectedLeaseObj.next(this.leaseArray[0]);
      }
      $(document).ready(function(){
        $('.ca-box-wrap').not('.slick-initialized').slick(
          {
            dots: false,
            speed: 500,
            prevArrow:$('.lease-prev'),
            nextArrow:$('.lease-next'),
            slidesToShow:4,
            slidesToScroll:1,
            infinite: false,
            variableWidth: true,
            vertical:false,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: false,
                  dots: false
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          }
        );
      });
    });
  }

  sortByleaseNo(array) {

    array.sort((a, b)=> {
      console.log(parseInt(a.leaseNo.split("-")[1]));
      console.log(parseInt(b.leaseNo.split("-")[1]));
      return parseInt(a.leaseNo.split("-")[1]) > parseInt(b.leaseNo.split("-")[1])
    });
    console.log(array);
    return array;
  }

  emitSelectedLeaseObj(selectedLease) {
    console.log(selectedLease);
    this.dashboardService.selectedLeaseObj.next(selectedLease);
  }
  getPage(value){
    this.sharedService.braedValue.next(value);
  }
}
