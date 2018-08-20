import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { api_header, API_DEV_HOST, API } from '../api';
import 'rxjs/add/operator/do';
import { Router } from '@angular/router';


@Injectable()
export class BackEndInterceptorService {

  constructor(private http: HttpClient, private router: Router) { }

  private token = '';
  // private sampleObject = '';

  private getEnvironmentUrl() {
    let protocol = window.location.protocol;
    let host = window.location.host;
    // host = host.indexOf('localhost')>-1? API_DEV_HOST : host;
    host = host.indexOf('localhost') > -1 ? "localhost:8080" : API_DEV_HOST;
    return protocol + '//' + host;
  }

  private getHeaders() {
    this.token = localStorage.getItem("token") ? localStorage.getItem("token") : "";
    let headers = new HttpHeaders();
    headers = headers
      .set('X-App-Client', api_header.X_App_Client)
      .set('token', this.token)
      // .set('Content-Security-Policy',api_header.Content_Security_Policy)
      // .set('X-Frame-Options',api_header.X_Frame_Options)
      // .set('X-Content-Type-Options', api_header.X_Content_Type_Options)
      // .set('X-XSS-Protection', api_header.X_XSS_Protection)
      .set('Content-Type', 'application/json');
    return headers;
  }

  setToken(token) {
    this.token = token;
  }

  getUrl(url: String) {
    //concatinating actual url by window url + parameter
    let finalUrl = this.getEnvironmentUrl() + url;
    return this.http.get(finalUrl, { headers: this.getHeaders() });
    // .do(res => {
    //   if (res && res['status'] != 'Success') {
    //     this.router.navigate(['/user/signin']);
    //   }
    // });;
  }

  postUrl(url: String, payLoad: any) {
    let finalUrl = this.getEnvironmentUrl() + url;
    console.log("urlres....", url);
    console.log("finalres.....", finalUrl);
    return this.http.post(finalUrl, payLoad, { headers: this.getHeaders() });
    // .do(res => {
    //   if (res && res['status'] != 'Success') {
    //     this.router.navigate(['/user/signin']);
    //   }
    // });
  }

  putUrl(url: String, payLoad: any) {
    let finalUrl = this.getEnvironmentUrl() + url;
    return this.http.put(finalUrl, payLoad, { headers: this.getHeaders() });
    // .do(res => {
    //   if (res && res['status'] != 'Success') {
    //     this.router.navigate(['/user/signin']);
    //   }
    // });;
  }
  tempApiCall(payLoad: any) {
    let finalUrl = this.getEnvironmentUrl() + API.login;
    console.log("urlres12333....", API.login);
    console.log("finalres32111.....", finalUrl);
    return this.http.post(finalUrl, payLoad, { headers: this.getHeaders(), observe: 'response' });
    // .subscribe(
    //   res=>{ 
    //     console.log('TempApiResponse')
    //     console.log(res)},
    // err => {
    //   console.log('TempApiError')
    //   console.log(err);
    // });
  }
}
