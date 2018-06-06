import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DashboardServiceService } from '../dashboard-service.service';
declare var $;
@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  openPopup = false;
  leaseData = {};
  alertCount: any = {
    "totalBadgeCount": 0,
    "totalEquipmentCount": 0,
    "totalDefaultBadgeCount": 0
  };

  constructor(private dashboardService:DashboardServiceService) {

   }
   ngAfterViewInit(): void {
    // $('.dropdown-menu button').on('click touch', function(){
    //   $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
    //    });
   
    $('#trigger1').on('click touch', function(){
      $('#tp1').show();
    });  
    $('#trigger2').on('click touch', function(){
      $('#tp2').show();
    });  
    $('#trigger3').on('click touch', function(){
      $('#tp3').show();
      $('#tp4').hide();
      $('#trigger3').css({'background-color': '#0072ce' , color : '#fff' });
      event.stopPropagation();
    });  
    $('#trigger4').on('click touch', function(){
      $('#tp3').hide();
      $('#tp4').show();
      $('#trigger4').css({'background-color': '#0072ce' , color : '#fff' });
      event.stopPropagation();
    });
    $('#tp1').on('click touch', function(event) {
      event.stopPropagation();
    });
    $('#tp2').on('click touch', function(event) {
      event.stopPropagation();
    });
    $('#tp3').on('click touch', function(event) {
      event.stopPropagation();
    });
    $('#tp4').on('click touch', function(event) {
      event.stopPropagation();
    });
    $(document).on('click touch', function(event) {
      if (!$(event.target).parents().addBack().is('#trigger1')) {
        $('#tp1').hide();
      }
    if (!$(event.target).parents().addBack().is('#trigger2')) {
        $('#tp2').hide();
      }
      if (!$(event.target).parents().addBack().is('#trigger3')) {
        $('#trigger3').css({'background-color': '' , color : '' });
        $('#tp3').hide();
      }
    if (!$(event.target).parents().addBack().is('#trigger4')) {
      $('#trigger4').css({'background-color': '' , color : '' });
        $('#tp4').hide();
      }
    
    });
    
  }

  ngOnInit() {
    this.dashboardService.changeObject.subscribe(data=>{
      if (data && data['totalBadgeCount']) {
        this.alertCount.totalBadgeCount = data['totalBadgeCount'];
        this.alertCount.totalEquipmentCount  = data['totalEquipmentBadgeCount'];
        this.alertCount.totalDefaultBadgeCount = data['totalDefaultLeaseBadgeCount'];
      }
    });
  }

  showAlerts(){
    this.openPopup = true;
  }

}
