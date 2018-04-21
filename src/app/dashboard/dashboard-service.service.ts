import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../api';
import { Subject } from 'rxjs/Subject';
import { BackEndInterceptorService } from '../shared/back-end-interceptor.service';


@Injectable()
export class DashboardServiceService {

  public leaseData = new Subject();

  constructor(private backEndInterceptorService: BackEndInterceptorService, private http: HttpClient) { 

  }

  getLeaseData(merchantId){
    let observable = this.http.get('https://api.myjson.com/bins/1cfb6b');
    return observable;
  }
  
  //.replace(/{(groupID)}/,id)

  // getLeaseData(merchantId){
  //   let url = API.merchant_leases.replace(/{(merchantId)}/,merchantId);
  //   return this.backEndInterceptorService.getUrl(url);
  // }

  getEppData(startDate,endDate){
    let url = API.get_epp.replace(/{(startDate)}/,startDate).replace(/{(endDate)}/,endDate);
    return this.backEndInterceptorService.getUrl(url);
  }

  postEppData(merchantId,payLoad){
    let url = API.save_epp.replace(/{(merchantId)}/,merchantId);
    return this.backEndInterceptorService.postUrl(url,payLoad);
  }



}
