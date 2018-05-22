import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from '../dashboard-service.service';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../shared/auth.service';
import { eppMock } from './epp-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-epp',
  templateUrl: './epp.component.html',
  styleUrls: ['./epp.component.css']
})
export class EppComponent implements OnInit {
  selectedLease = "";
  merchantId = "";
  leaseData = [];
  merchantName='';
  contactName='';
  leaseFormGroup  = new FormGroup({});
  checkboxGroup: FormGroup;
  coverageRate = 10;
  totalAmt = 0;
  showPopup = false;
  allLeaseSelected = false;
  noButtonPopup = false;
  checkbox: any = {
    "yes": true,
    "no": true,
    "agree": true,
    "submit": true
  };

  closeButtonClicked = false;
  yesModel = false;
  noModel = false;
  agreeModel = false;
  showeppstatic=false;
  dataReady = false;
  constructor(private dashboardService:DashboardServiceService, private authService:AuthService,private router:Router) { }

  ngOnInit() {
     // this.leaseData = eppMock.responseData.lease;
     // this.leaseData.forEach(item => {
     //   this.leaseFormGroup.addControl(item.leaseNo, new FormControl(false));
     // });
     // this.listenFormGroup();

    this.dashboardService.getLeaseData("").subscribe(data=>{
      if (data) {
        // this.leaseData = data['responseData']['lease'];
        this.contactName= data['responseData']['contactName'];
        this.merchantName= data['responseData']['merchantName'];
        // this.merchantId= data['responseData']['merchantId'];
        this.merchantId = localStorage.getItem("merchantId");
        console.log("merchantid.........",this.merchantId);
        let leases = data['responseData']['lease'];
        let alltrue = true;

        this.dashboardService.getEppByMerchant(this.merchantId).subscribe(res=>{
         
            leases.forEach(item => {
              let tohide= false;
              res['responseData'].forEach(itm=>{
                if(item.leaseNo==itm.leaseNumber){
                  tohide=true;
                 }
              })
              if (item.equipmentCoverage.equipmentCoverage == "No" && !tohide) {
                this.leaseFormGroup.addControl(item.leaseNo, new FormControl(false));
                this.leaseData.push(item);
                alltrue = false;
              }
            });
            if(alltrue){
              this.showeppstatic = true;
            }
    
            this.listenFormGroup();
          
        })
        
      }
      this.dataReady = true;
    },err=>{
      console.log('----- get lease data error-------',err);
    });

    // this.postEpp(merchantid,arr);
  }

  // getEppData(){
  //   var mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  //   var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  //   let d = new Date();
  //   let startDate = d.getDate() + '-' + mS[d.getMonth()] + '-' + d.getFullYear(); //"20-Apr-2018"
  //   let endDate = "30-Apr-2018";
  //   this.dashboardService.getEppData(startDate,endDate).subscribe(res=>{
  //     console.log('-----epp data received--------',res)
  //   },err=>{
  //     console.log('-------epp data not received-----------',err);
  //   });
  // }

  postEpp(merchantId,payLoadArray){
    let arr = [
      // {
      // "insCode": "81",
      // "leaseNumber": this.selectedLease,
      // "name": this.merchanName,
      // }
      ];
      console.log("present formGroup value...",this.leaseFormGroup.value)
      this.leaseData.forEach(item=>{
        if(this.leaseFormGroup.controls[item.leaseNo].value){
          arr.push({
            "insCode": "81",
            "leaseNumber": item.leaseNo,
            "name": this.merchantName,
          })
        }
      })
      
      let payLoad = arr;
      merchantId= this.merchantId;
      console.log("merchantid",merchantId);
    this.dashboardService.postEppData(merchantId,payLoad).subscribe(res=>{
      
      console.log('------post epp data success-----',res)
    },err=>{
      console.log('----- get lease data error-------',err);
      if(err['error']['statusCode']=='401'){
        console.log('-------error code 401--------redirect here----')
        this.router.navigate(['/error401']);
      }
      if(err['error']['statusCode']=='500' || err['error']['statusCode']=='501'|| err['error']['statusCode']=='503'){
        console.log('-------error code 500,501,503--------redirect here----')
        this.router.navigate(['/serviceerrors']);
      }
    });
  }
  onYesNoClicked(event) {
    
    if(event.target.value == "yes" && event.target.checked) {
    this.yesModel = true;
    this.noModel = false;
    
    this.checkbox.agree = false;
    this.checkbox.submit = true;
    // if (this.agreeModel) {
    // this.checkbox.submit = false;
    // }
    } else if (event.target.value == "yes" && !event.target.checked) {
    this.yesModel = false;
    this.checkbox.agree = true;
    this.checkbox.submit = true;
    
    }
    
    
    if (event.target.value == "no" && event.target.checked) {
    this.checkbox.agree = true;
    this.checkbox.submit = true;
    this.yesModel = false;
    this.noModel = true;
    if( this.noModel = true){
    this.agreeModel = false;
    }
    
    this.showPopup = true;
    this.noButtonPopup = true;
    
    if (this.agreeModel) {
    this.checkbox.submit = true;
    }
    } else if (event.target.value == "no" && !event.target.checked) {
    this.noButtonPopup = false;
    this.noModel = false;
    }
    
    if (event.target.value == "agree" && event.target.checked) {
    this.agreeModel = event.target.checked ? true : false; 
    // if(event.target.value == "agree" && !event.target.checked){
    // this.checkbox.submit = false;
    
    // }
    
    // if(this.agreeModel){
    this.checkbox.submit = false;
    // }
    
    // if (this.yesModel ) {
    // this.checkbox.submit = false;
    // }
    } else if (event.target.value == "agree" && !event.target.checked) {
    this.checkbox.submit = true;
    }
    }


  onSubmit() {
    console.log("submit Clicked");
  }

  listenFormGroup(){
    this.leaseFormGroup.valueChanges.subscribe(checkbox => {
      console.log(checkbox);
      //-------rate total count----
      this.totalAmt = 0;

      let selectedCount = 0;
      let unSelectedCount = 0;
      for(let key in checkbox) {
        if(checkbox[key]){
          this.totalAmt = this.totalAmt + this.coverageRate;
          selectedCount++;
        } else {
          unSelectedCount++;
        }
      }

      if(selectedCount === Object.keys(checkbox).length) {
        this.allLeaseSelected = true;
        this.checkbox = {
          "yes": false,
          "no": false,
          "agree": true,
          "submit": true
        };
      } else if (unSelectedCount === Object.keys(checkbox).length) {
        this.checkbox = {
          "yes": true,
          "no": true,
          "agree": true,
          "submit": true
        };
      } else {
        this.allLeaseSelected = false;
      }
    });
  }

  onToggleChange(event) {
    
    if (event.target.checked && !this.allLeaseSelected) {
      console.log("event.....",event.target.value);
      this.selectedLease = event.target.value;
      this.showPopup = true;
    }
  }

  addButtonClicked() {
    this.closeButtonClicked = false;
    this.showPopup = false;
    this.noButtonPopup = false;
  }

  closePopup() {
    this.closeButtonClicked = true;
    this.showPopup = false;
    this.checkbox = {
      "yes": false,
      "no": false,
      "agree": false,
      "submit": true
    };

    if ((this.yesModel || this.noModel) && this.agreeModel) {
      this.checkbox.submit = false;
    }
  }
}

