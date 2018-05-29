import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from './dashboard-service.service';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dashboardService:DashboardServiceService, private authService:AuthService, private router:Router) { }

  ngOnInit() {
    let referenceKey = this.authService.currentReferenceKey;
    this.dashboardService.getLeaseData("").subscribe(data=>{
      // if(!data){this.router.navigate(['/dashboard/loading']);}
    console.log('-----lease data received-------',data);
    this.dashboardService.leaseData.next(data['responseData']);
    },err=>{
      console.log('----- get lease data error-------',err);
      if(err['error']['statusCode']=='401'){
        console.log('-------error code 401--------redirect here----')
        this.router.navigate(['/error401']);
      }
        if(err['error']['statusCode']=='500'|| err['error']['statusCode']=='501' || err['error']['statusCode']=='503'){
        console.log("from dashboard",window.location.href)
        this.router.navigate(['/user/signin']);
      }
    });
  }
}
