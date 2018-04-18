import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { api_header, API_DEV_HOST } from '../api';

@Injectable()
export class BackEndInterceptorService {

  constructor(private http:HttpClient) { }

  private getEnvironmentUrl(){
    let protocol = window.location.protocol;
    let host = window.location.host;
    host = host.indexOf('localhost')>-1? API_DEV_HOST : host;
    return protocol + '//' + host;
  }

  private getHeaders(){
    let headers = new HttpHeaders();
    headers = headers
              .set('X-App-Client', api_header.X_App_Client)
              .set('token', api_header.token);
    return headers;
  }

  getUrl(url:String){
    //concatinating actual url by window url + parameter
    let finalUrl = this.getEnvironmentUrl() + url;
    return this.http.get(finalUrl,{ headers: this.getHeaders() });
  }

  postUrl(url:String, payLoad:any){
    let finalUrl = this.getEnvironmentUrl() + url;
    return this.http.post(finalUrl, payLoad, { headers: this.getHeaders() });
  }

  putUrl(url:String, payLoad:any){
    let finalUrl = this.getEnvironmentUrl() + url;
    return this.http.put(finalUrl, payLoad, { headers: this.getHeaders() });
  }
}
