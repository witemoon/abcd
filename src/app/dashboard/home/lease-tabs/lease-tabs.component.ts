import {Component, OnInit, Input, AfterViewInit, OnChanges, SimpleChanges} from '@angular/core';
import {DashboardServiceService} from '../../dashboard-service.service';
import { Router } from '@angular/router';
declare var $;

@Component({
  selector: 'lease-tabs',
  templateUrl: './lease-tabs.component.html',
  styleUrls: ['./lease-tabs.component.css']
})
export class LeaseTabsComponent implements OnInit, AfterViewInit, OnChanges {
  
  ngOnChanges(changes: SimpleChanges): void {
   
  }
  openBuyOutInfo=false;
  openPopup = false;
  showTabs = false;
  selectedLease = {};
  @Input() selectedIndex;

  constructor(private router:Router,private dashboardService: DashboardServiceService) {
  }
  onNavItemClicked(event) {
    this.selectedIndex = event.target.getAttribute("index");
  }
  ngAfterViewInit(): void {
    
  }
  initToolTip(){

        $('.nav > li a').removeClass('active show');
        $('.nav > li:first a').addClass('active show');
        $('.tab-content > .tab-pane').removeClass('active show');
        $('.tab-content > .tab-pane:first').addClass('active show');

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
    eqpCarousel() {
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
  }

 
  ngOnInit() {
    this.dashboardService.selectedCard.asObservable().subscribe(
      (data:any) => {
        console.log('Tab Comp::'+ data);
        
      }
    );
    this.dashboardService.selectedLeaseObj.subscribe(data => {
      this.selectedLease = data;
      this.showTabs = true;
      setTimeout(()=>{
        this.initToolTip();
        
        
       },50)
    })
    if(!this.selectedIndex) {
      this.selectedIndex = "1";
    }

    if(this.selectedIndex){
      this.selectedLease['legalStatus']=='Default'
       this.selectedIndex = "1";
       

    }
    
  }

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