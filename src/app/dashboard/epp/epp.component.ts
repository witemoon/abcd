import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from '../dashboard-service.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-epp',
  templateUrl: './epp.component.html',
  styleUrls: ['./epp.component.css']
})
export class EppComponent implements OnInit {

  leaseData = {};
  leaseFormGroup  = new FormGroup({});
  coverageRate = 10;
  totalAmt = 0;
  showPopup = false;
  popupFirstTime = true;

  constructor(private dashboardService:DashboardServiceService) { }

  ngOnInit() {
    this.dashboardService.leaseData.subscribe(data=>{
      this.leaseData = data;
      this.leaseData['Leases'].forEach(item => {
        this.leaseFormGroup.addControl(item.leaseId, new FormControl(false));
      });
      this.listenFormGroup();
    })
  }

  listenFormGroup(){
    this.leaseFormGroup.valueChanges.subscribe(checkbox=>{
      console.log(checkbox);
      //-------rate total count----
      this.totalAmt = 0;
      for(let key in checkbox){
        if(checkbox[key]){
          this.totalAmt = this.totalAmt + this.coverageRate;
        }
      }
      //---------------------------

      //------------------------
      if(this.popupFirstTime){
        this.showPopup = true;
      }
      this.popupFirstTime = false;
      //-------------------------
    })
  }

}
