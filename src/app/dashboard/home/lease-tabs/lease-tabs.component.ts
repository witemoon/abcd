import {Component, OnInit, AfterViewInit} from '@angular/core';
import {DashboardServiceService} from '../../dashboard-service.service';
import { Router } from '@angular/router';
declare var $;

@Component({
  selector: 'lease-tabs',
  templateUrl: './lease-tabs.component.html',
  styleUrls: ['./lease-tabs.component.css']
})
export class LeaseTabsComponent implements OnInit, AfterViewInit{
  openBuyOutInfo=false;
  openPopup = false;
  showTabs = false;
  selectedLease = {};
  currentActiveTab = 'equipment';

  constructor(private router:Router,private dashboardService: DashboardServiceService) {
  }
  ngAfterViewInit(): void {
   
    
  }

  
  showContent(tabname){
    this.currentActiveTab = tabname;
  }

  ngOnInit() {
    this.dashboardService.selectedLeaseObj.subscribe(data => {
      this.selectedLease = data;
      this.showTabs = true;
    })
    $('#trigger1').on('click touch', function(){
      $('#tp1').show();
    });  
    $('#trigger2').on('click touch', function(){
      $('#tp2').show();
    });  
    $('#tp1').on('click touch', function(event) {
      event.stopPropagation();
    });
    $('#tp2').on('click touch', function(event) {
      event.stopPropagation();
    });
    $(document).on('click touch', function(event) {
      if (!$(event.target).parents().addBack().is('#trigger1')) {
        $('#tp1').hide();
      }
    if (!$(event.target).parents().addBack().is('#trigger2')) {
        $('#tp2').hide();
      }
    
    });
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


