import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../api';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class DashboardServiceService {

  public leaseData = new Subject();

  constructor(private http:HttpClient) { 

  }

  getLeaseData(){
    let observable = this.http.get(API.getLease);
    return observable;
  }

}
