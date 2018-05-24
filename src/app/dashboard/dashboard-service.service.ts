import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../api';
import { Subject } from 'rxjs/Subject';
import { BackEndInterceptorService } from '../shared/back-end-interceptor.service';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class DashboardServiceService {

  public leaseData = new Subject();
  public selectedLeaseObj = new Subject();
  public changeObject = new Subject();

  public selectedCard = new BehaviorSubject<any>(null);

  constructor(private backEndInterceptorService: BackEndInterceptorService, private http: HttpClient) {

  }

  getLeaseData(merchantId){
    let observable = this.http.get('https://api.myjson.com/bins/rpnt7');
    return observable;
  }

  //.replace(/{(groupID)}/,id)

  // getLeaseData(referenceKey){
  //   referenceKey = localStorage.getItem("referenceKey");
  //   let url = API.merchant_leases.replace(/{(referenceKey)}/,referenceKey);
  //   return this.backEndInterceptorService.getUrl(url);
  // }

  getEppData(startDate,endDate){
    let url = API.get_epp.replace(/{(startDate)}/,startDate).replace(/{(endDate)}/,endDate);
    return this.backEndInterceptorService.getUrl(url);
  }
  getEppByMerchant(merchantId){
    let url=API.ins_epp.replace(/{(merchantId)}/,merchantId);
    return this.backEndInterceptorService.getUrl(url);
  }

  postEppData(merchantId, payLoad){
    merchantId = localStorage.getItem("merchantId");
    console.log("payload.......",payLoad)
    let url = API.save_epp.replace(/{(merchantId)}/,merchantId);
    return this.backEndInterceptorService.postUrl(url,payLoad);
  }

  changeObj(obj) {
    this.changeObject.next(obj);
  }
}
