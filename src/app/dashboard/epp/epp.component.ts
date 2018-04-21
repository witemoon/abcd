import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from '../dashboard-service.service';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../shared/auth.service';

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

  constructor(private dashboardService:DashboardServiceService, private authService:AuthService) { }

  ngOnInit() {
    this.dashboardService.leaseData.subscribe(data=>{
      this.leaseData = data;
      this.leaseData['lease'].forEach(item => {
        this.leaseFormGroup.addControl(item.leaseId, new FormControl(false));
      });
      this.listenFormGroup();
    })

    this.getEppData();
    let arr = [
      {
        "insCode": "string",
        "leaseNumber": 0,
        "name": "string"
      }
    ];
    let merchantid = "903532646994";
    this.postEpp(merchantid,arr);
  }

  getEppData(){
    var mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    let d = new Date();
    let startDate = d.getDate() + '-' + mS[d.getMonth()] + '-' + d.getFullYear(); //"20-Apr-2018"
    let endDate = "30-Apr-2018";
    this.dashboardService.getEppData(startDate,endDate).subscribe(res=>{
      console.log('-----epp data received--------',res)
    },err=>{
      console.log('-------epp data not received-----------',err);
    });
  }

  postEpp(merchantId,payLoadArray){
    let payLoad = payLoadArray;
    this.dashboardService.postEppData(merchantId,payLoad).subscribe(res=>{
      console.log('------post epp data success-----',res)
    },err=>{
      console.log('---------post epp data failure--------',err)
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
