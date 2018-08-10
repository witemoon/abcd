import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BackEndInterceptorService } from './back-end-interceptor.service';
import { API } from '../api';

@Injectable()
export class AuthService {

  currentEmail = "";
  currentReferenceKey = "";

  constructor(private backEndInterceptorService: BackEndInterceptorService) {

  }

  setToken(token) {
    this.backEndInterceptorService.setToken(token);
  }

  signIn(payLoad: any) {
    let url = API.login;
    console.log("respo....");
    return this.backEndInterceptorService.postUrl(url, payLoad);
  }

  register(payLoad: any) {
    let url = API.merchant_register;
    return this.backEndInterceptorService.postUrl(url, payLoad);
  }

  forgetPassword(payLoad: any) {
    let url = API.forget_password;
    return this.backEndInterceptorService.postUrl(url, payLoad);
  }

  changePassword(payLoad: any) {
    let url = API.change_password;
    return this.backEndInterceptorService.postUrl(url, payLoad);
  }

  logOut() {
    let url = API.merchant_logout;
    return this.backEndInterceptorService.getUrl(url);
  }

  tempApiUrl(payLoad: any) {
    let url = API.login;
    console.log("respo....");
   this.backEndInterceptorService.postUrl(url, payLoad);
  }
}
