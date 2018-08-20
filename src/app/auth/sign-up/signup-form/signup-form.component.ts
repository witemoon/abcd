import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgForm, FormControl } from "@angular/forms";
import 'rxjs/add/operator/filter';
import { AuthService } from '../../../shared/auth.service';
import { SharedService } from '../../../shared/shared';
import { BackEndInterceptorService } from './../../../shared/back-end-interceptor.service';
declare var $: any

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  // loaderStatus = false;
  /*TEst*/

  captchaSelected: boolean = false;
  errorResponse: any = {
    "incorrectRefKey": false,
    "incorrectLeaseNo": false,
    "incorrectMerchant": false
  };

  @ViewChild("merchantDBA") merchantDBA: ElementRef;
  @ViewChild("leaseNumber") leaseNumber: ElementRef;
  @ViewChild("referenceKey") referenceKey: ElementRef;

  currentTab = 'signup';
  referenceKeyFC = new FormControl();
  leaseNumberFC = new FormControl();
  merchantDbaFC = new FormControl();
  @Output() ctab = new EventEmitter();
  @Output() errorToStat = new EventEmitter();

  @ViewChild("captchaRef") captcha;

  constructor(private router: Router, private authService: AuthService, public loader: SharedService, private backEndInterceptorService: BackEndInterceptorService) {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        console.log('-------router event----------', event)
        if (event.url == '/user/signin') {
          localStorage.clear();
          this.currentTab = 'signin';
          this.ctab.emit(this.currentTab);
          console.log("inside form----", this.currentTab)
        } else {
          this.currentTab = 'signup';
          this.ctab.emit(this.currentTab);
        }
      });
  }

  leaseNumberFirstTime = true;
  ngOnInit() {
    console.log('---------- came to sign in page-------')
  }

  isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  removeChar(value) {
    let finalStr;
    for (let i = 0; i < value.length; i++) {
      if (i == 3 || i == 11) { } else {
        console.log('---i----' + i + '---' + value)
        if (!this.isNumeric(value.charAt(i))) {
          let st = value.substr(0, value.length - 1);
          console.log('-inside removeing--i----' + i + '---' + value)
          console.log('setting formcontrol by removing on char', st)
          finalStr = st;
        }
      }
    }
    return finalStr || value;
  }

  signUpUser(signUpForm) {
    // this.loaderStatus= true;
    $('html, body').css({ 'overflow': 'hidden', 'height': '100%' })
    this.loader.loaderStatus.next(true);

    let valid = this.validateForm(signUpForm);

    if (valid) {
      var refKey = signUpForm.value.referenceKey;
      var leaseNo = signUpForm.value.leaseNumber;
      var merchantDBA = signUpForm.value.merchantDBA.toLowerCase();

      let payLoad = {
        "leaseNumber": '' + leaseNo,
        "merchantDBA": '' + merchantDBA,
        "referenceKey": refKey
      };

      this.authService.register(payLoad).subscribe(res => {
        console.log('register Response:', res);
        // this.loaderStatus= false;
        this.loader.loaderStatus.next(false);
        this.router.navigate(['/signthank']);
      }, error => {
        console.log('signup error', error);
        this.captcha.reset();
        this.captchaSelected = false;
        // this.loaderStatus= false;
        this.loader.loaderStatus.next(false);
        $('html, body').css({ 'overflow': 'auto', 'height': '100%' })

        if (error.error && error.error.message) {
          let errMessage = error.error.message;

          this.errorResponse.incorrectRefKey = errMessage.includes("reference key") ? true : false;
          signUpForm.resetForm();
          this.errorResponse.incorrectLeaseNo = errMessage.includes("lease number") ? true : false;
          signUpForm.resetForm();
          this.errorResponse.incorrectMerchant = errMessage.includes("merchant dba") ? true : false;
          signUpForm.resetForm();
          this.errorToStat.emit(error.error.message);

        }
        if ((error['error']['statusCode'] === '500' && !error['error']['message'].includes("locked")) || error['error']['statusCode'] === '501' || error['error']['statusCode'] === '503' || error['error']['statusCode'] === '504') {
          this.router.navigate(['/serviceerrors']);
        }

        if (error['error']['statusCode'] === '500' && error['error']['message'].includes("locked")) {
          this.errorToStat.emit(error.error.message);
        }

      });
    }
  }

  validateForm(signUpForm): boolean {
    if (!signUpForm.value.referenceKey || !signUpForm.value.leaseNumber || !signUpForm.value.merchantDBA || !this.captchaSelected) {
      this.captcha.reset();
      this.captchaSelected = false;
      return false;
    }

    return true;
  }

  hideRef() {
    this.referenceKey.nativeElement.focus();
    this.errorResponse.incorrectRefKey = false;
  }
  hideLeaseError() {
    this.leaseNumber.nativeElement.focus();
    this.errorResponse.incorrectLeaseNo = false;
  }
  hideMerchantdError() {
    this.merchantDBA.nativeElement.focus();
    this.errorResponse.incorrectMerchant = false;
  }

  onInputKeyUp(event) {
    if (event) {
      if (event.target.name == "referenceKey") {
        this.errorResponse.incorrectRefKey = false;
        // if(!(/^[-+]?\d+$/g).test(event.target.value)) {
        if (event.target.value.length > 30) {
          event.target.value = event.target.value.substr(0, 30);
        } else {
          this.errorResponse.incorrectRefKey = false;
        }
      } else if (event.target.name == "leaseNumber") {
        this.errorResponse.incorrectLeaseNo = false;
        let value = event.target.value;

        if (value.length == 3 || value.length == 11) {
          value += "-";
        }

        event.target.value = value;
      } else if (event.target.name == "merchantDBA") {
        this.errorResponse.incorrectMerchant = false;
      }
    }
  }

  signInError = false;
  singInSuccess = true;

  signInRegular(signInReg) {
    // this.loaderStatus= true;
    this.loader.loaderStatus.next(true);

    var email = signInReg.value.email.toLowerCase();
    var passwordReg = signInReg.value.password;
    let str = btoa(passwordReg);
    console.log("str", str)
    let data = [];
    for (var i = 0; i < str.length; i++) {
      data.push(str.charCodeAt(i));
    }
    passwordReg = data;
    console.log("encr", passwordReg)
    let payLoad = {
      "emailId": "" + email,
      "password": passwordReg
    }

    this.backEndInterceptorService.tempApiCall(payLoad).subscribe(res => {
      console.log('response coming....................',res);
      if (res['statusCode'] == '302') {
        this.signInError = false;
        this.singInSuccess = false;
        // this.authService.setToken(res['responseData'].token);
        // this.authService.currentMerchantId = res['responseData'].merchantId; // 32021880018 change the key name properly from success message
        // this.authService.currentMerchantId ="903532646994"; // 903532646994 change the key name properly from success message
        localStorage.setItem("referenceKey", res['responseData'].referenceKey);
        localStorage.setItem("token", res['responseData'].token);
        localStorage.setItem("merchantId", res['responseData'].merchantId);
        this.loader.loaderStatus.next(false);
        this.router.navigate(['/dashboard/home']);
      }
      else {
        this.signInError = true;
        console.log('regular signin failed.........', res['status']);
      }
    }, error => {
      this.signInError = true;
      // this.loaderStatus= false;
      this.loader.loaderStatus.next(false);
      console.log('regular signin faild 302', error);
      if (error['error']['statusCode'] == '500' || error['error']['statusCode'] == '501' || error['error']['statusCode'] == '503' || error['error']['statusCode'] == '504') {
        console.log('-------error code 500,501,503,504--------redirect here----')
        this.router.navigate(['/serviceerrors']);
      }
      else if(error['statusCode'] == '302'){
        this.backEndInterceptorService.tempApiCall(payLoad).subscribe(res => {
          console.log('from error passing 301 response');
          this.signInError = false;
          this.singInSuccess = false;
          localStorage.setItem("referenceKey", res['responseData'].referenceKey);
          localStorage.setItem("token", res['responseData'].token);
          localStorage.setItem("merchantId", res['responseData'].merchantId);
          this.loader.loaderStatus.next(false);
          this.router.navigate(['/dashboard/home']);
        });
      }
      else {
        this.signInError = true;
        console.log('regular signin passing for 301 failed.........');
      }
    });
  }
  // signinr(signInReg){
  //   // this.loader.loaderStatus.next(true);

  //   var email = signInReg.value.email.toLowerCase();
  //   var passwordReg = signInReg.value.password;
  //   let str = btoa(passwordReg);
  //   console.log("str", str)
  //   let data = [];
  //   for (var i = 0; i < str.length; i++) {
  //     data.push(str.charCodeAt(i));
  //   }
  //   passwordReg = data;
  //   console.log("encr", passwordReg)
  //   let payLoad = {
  //     "emailId": "" + email,
  //     "password": passwordReg
  //   }
  //   this.backEndInterceptorService.tempApiCall(payLoad).subscribe(res => {
  //     console.log(res);
  //   });
  // }


  signInPageReg() {
    this.router.navigate(['/user/signin']);
  }
  resetRegPassword() {
    this.router.navigate(['/resetPassword'])
  }

  backToLandingPage() {
    this.router.navigate(['/']);
  }

  captchaResolved(event) {
    this.captchaSelected = true;
  }
}
