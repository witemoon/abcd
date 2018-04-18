import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BackEndInterceptorService } from './back-end-interceptor.service';
import { API } from '../api';

@Injectable()
export class AuthService {

  constructor(private backEndInterceptorService: BackEndInterceptorService) { }

  signIn(payLoad:any){
    let url = API.login;
    return this.backEndInterceptorService.postUrl(url,payLoad);
  }

  register(payLoad:any){
    let url = API.merchant_register;
    return this.backEndInterceptorService.postUrl(url,payLoad);
  }

  forgetPassword(payLoad:any){
    let url = API.forget_password;
    return this.backEndInterceptorService.putUrl(url,payLoad);
  }

  changePassword(payLoad:any){
    let url = API.change_password;
    return this.backEndInterceptorService.putUrl(url,payLoad);
  }

  logOut(){
    let url = API.merchant_logout;
    return this.backEndInterceptorService.getUrl(url);
  }

}
