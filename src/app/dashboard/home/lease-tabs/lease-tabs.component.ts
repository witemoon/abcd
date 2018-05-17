import {Component, OnInit, AfterViewInit} from '@angular/core';
import {DashboardServiceService} from '../../dashboard-service.service';
import { Router } from '@angular/router';
declare var $;

@Component({
  selector: 'lease-tabs',
  templateUrl: './lease-tabs.component.html',
  styleUrls: ['./lease-tabs.component.css']
})
export class LeaseTabsComponent implements OnInit, AfterViewInit {
  
  openBuyOutInfo=false;
  openPopup = false;
  showTabs = false;
  selectedLease = {};
  currentActiveTab = 'equipment';

  constructor(private router:Router,private dashboardService: DashboardServiceService) {
  }
  ngAfterViewInit(): void {
   
    
  }


  initToolTip(){
    
    console.log('----- going to set jquery on currentbala-trigger -----------')
    $('#currentbala-trigger').on('click touch', function(){
      $('#currentbala-tooltip').show();
      console.log("--- $('#currentbala-tooltip').show(); ------");
    });  
    $('#Buyout-trigger').on('click touch', function(){
      $('#Buyout-tooltip').show();
    });  
    $('#currentbala-tooltip').on('click touch', function(event) {
      event.stopPropagation();
    });
    $('#Buyout-tooltip').on('click touch', function(event) {
      event.stopPropagation();
    });
    $(document).on('click touch', function(event) {
      if (!$(event.target).parents().addBack().is('#currentbala-trigger')) {
        $('#currentbala-tooltip').hide();
      }
    if (!$(event.target).parents().addBack().is('#Buyout-trigger')) {
        $('#Buyout-tooltip').hide();
      }
    
    });
  }

  showContent(tabname){
    this.currentActiveTab = tabname;
  }
  ngOnInit() {
    this.dashboardService.selectedLeaseObj.subscribe(data => {
      this.selectedLease = data;
      this.showTabs = true;
      setTimeout(()=>{
        this.initToolTip();
        // this.initCaro();
      },2000)
    })
    
  }

  // initCaro(){
    
  //     $('.eqiptabs').not('.slick-initialized').slick(
  //       {
  //         dots: false,
  //         speed: 500,
  //         prevArrow:$('.lease-prev'),
  //         nextArrow:$('.lease-next'),
  //         slidesToShow:4,
  //         slidesToScroll:1,
  //         infinite: false,
  //         variableWidth: true,
  //         responsive: [
  //           {
  //             breakpoint: 1024,
  //             settings: {
  //               slidesToShow: 3,
  //               slidesToScroll: 3,
  //               infinite: false,
  //               dots: false
  //             }
  //           },
  //           {
  //             breakpoint: 600,
  //             settings: {
  //               slidesToShow: 2,
  //               slidesToScroll: 2
  //             }
  //           },
  //           {
  //             breakpoint: 480,
  //             settings: {
  //               slidesToShow: 1,
  //               slidesToScroll: 1
  //             }
  //           }
  //         ]
  //       }
  //     );
  
  // }

  showBuyOutMsg(s){
    this.openBuyOutInfo =s;
  }

  showAlerts() {
    this.openPopup = true;
  }
  ec(){
    if(this.selectedLease['equipmentCoverage'] && this.selectedLease['equipmentCoverage']['equipmentCoverage'] && this.selectedLease['equipmentCoverage']['equipmentCoverage']=='No'){
      this.router.navigate(['/dashboard/epp']);
    }
  }
}