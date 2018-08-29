import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { AuthService } from '../../shared/auth.service';
import { SharedService } from '../../shared/shared';

@Component({
  selector: 'app-change-temp-pass',
  templateUrl: './change-temp-pass.component.html',
  styleUrls: ['./change-temp-pass.component.css']
})
export class ChangeTempPassComponent implements OnInit{
  // loaderStatus = false;
  showError: boolean = false;
  passwordNew: string = "";
  passwordValid: boolean = false;
  captchaSelected: boolean = false;
  submitted: boolean = false;

  @ViewChild("tmpPass") tmpPass: ElementRef;
  @ViewChild("cPass") cPass: ElementRef;
  @ViewChild("pass") pass: ElementRef;
  @ViewChild("captchaRef") captcha;

  passwordFC = new FormControl();

  upperAndLowerCase = false;
  number = false;
  splChar = false;
  eightChar = false;
  validationError: any = {
    "tempPasswordError": false,
    "newPasswordError": false,
    "confirmPasswordError": false
  };
  email: string;
  constructor(private router: Router, private authService: AuthService, private activatedRoute: ActivatedRoute, public loader: SharedService) {
    this.authService.setToken("");
  }

  ngOnInit() {
    this.showError = false;
    if (!this.authService.currentEmail) {

      this.activatedRoute.queryParams.subscribe(
        data => {
          this.email = data.email
          console.log('queryParams', data['email'])
          let encodedName = encodeURI(data['email']);
          let str = encodedName.replace("%20", "%2B");
          let encodedURI = decodeURI(str);
          this.email = decodeURIComponent(str);
        });
    } else {
      this.email = this.authService.currentEmail
    }

    this.passwordFC.valueChanges.subscribe(value => {
      if (this.hasLowerCase(value) && this.hasUpperCase(value)) {
        this.upperAndLowerCase = true;

      } else {
        this.upperAndLowerCase = false;
      }
      if (this.hasNumber(value)) {
        this.number = true;
      }
      else {
        this.number = false;
      }
      if (this.hasSpecialChar(value)) {
        this.splChar = true;
      }
      else {
        this.splChar = false;
      }
      if (value.length > 8) {
        this.eightChar = true;
      } else {
        this.eightChar = false;
      }

      if (this.upperAndLowerCase && this.number && this.splChar && this.eightChar) {
        setTimeout(() => {    //<<<---    using ()=> syntax
          this.showError = false;
        }, 500);

      }
      //  else if ((!this.upperAndLowerCase || !this.number || !this.splChar || !this.eightChar) &&
      //   event) {
      //     console.log("showerror true");
      //   this.showError = true;
      // }

    });
  }

  // ngAfterViewInit() {
  //   this.showError = false;
  // }
  encryption(encryptVal) {
    let str = btoa(encryptVal);
    console.log("str", str)
    let data = [];
    for (var i = 0; i < str.length; i++) {
      data.push(str.charCodeAt(i));
    }
    console.log("data", data)
    return data;
  }

  hidePasswordError() {
    this.showError = true;
    this.pass.nativeElement.focus();
    this.validationError.newPasswordError = false;
  }
  hideConfPasswordError() {
    this.cPass.nativeElement.focus();
    this.validationError.confirmPasswordError = false;
  }
  hideTempPasswordError() {
    this.tmpPass.nativeElement.focus();
    this.validationError.tempPasswordError = false;
  }

  onInputBlur(event) {
    this.showError = false;
    // if ((this.upperAndLowerCase && this.number && this.splChar && this.eightChar) &&
    //     (this.passwordFC.value == this.cPass.nativeElement.value) && this.tmpPass.nativeElement.value.length > 7) {
    //       this.passwordValid = true;
    //     } else {
    //       this.passwordValid = false;
    //     }
    if (this.passwordFC.value && this.tmpPass.nativeElement.value && this.cPass.nativeElement.value && this.captchaSelected) {
      this.passwordValid = true;
    } else {
      this.passwordValid = false;
    }

    // if (this.tmpPass.nativeElement.value.length < 8) {
    //   this.validationError.tempPasswordError = true;
    // }


    if ((!this.upperAndLowerCase || !this.number || !this.splChar || !this.eightChar) &&
      event && event.target.name == "passwordNew") {
      this.validationError.newPasswordError = true;
      this.showError= true;
      this.submitted = false;
    } else if (event && event.target.name == "passwordNew") {
      this.validationError.newPasswordError = false;
    }

    if ((this.passwordFC.value != this.cPass.nativeElement.value) &&
      (event && event.target.name == "confPassword")) {
      this.validationError.confirmPasswordError = true;
      this.submitted = false;
    } else if (event && event.target.name == "confPassword") {
      this.validationError.confirmPasswordError = false;
      
    }

    // if (!this.validationError.newPasswordError &&
    //       (event && event.target.name == "confPassword") &&
    //       event.target.value != this.passwordFC.value) {
    //     this.validationError.confirmPasswordError = true;
    // }
    
  }

  onblurevent(event){
    if(event.target.value == this.passwordFC.value){
      this.showError = false;
    }
  }

  captchaResolved() {
    
    this.captchaSelected = true;
    this.onInputBlur("");
  }


  changePassword(changePass) {
    // this.loaderStatus= true;
    this.loader.loaderStatus.next(true);

    var tempPass = changePass.value.tempPass;
    var newPass = this.passwordFC.value;
    var cnfPass = changePass.value.confPassword;

    //  if (tempPass == ""){
    //     this.validationError.tempPasswordError = true;
    //  } else if (!newPass && !cnfPass && !tempPass) {

    //    this.validationError.tempPasswordError = true;
    //    this.validationError.confirmPasswordError = true;
    //    this.validationError.newPasswordError = true;
    //    this.captcha.reset();
    //  } else if(newPass && cnfPass && (newPass == cnfPass)){
    tempPass = this.encryption(tempPass);
    newPass = this.encryption(newPass);
    cnfPass = this.encryption(cnfPass);
    let payLoad = {
      "currentPassword": tempPass,
      "newPassword": newPass,
      "confirmPassword": cnfPass,
      "emailId": '' + this.email,
    };

    this.authService.changePassword(payLoad).subscribe(res => {
      // this.loaderStatus= false;
      this.loader.loaderStatus.next(false);
      if (res['status'] == 'Success') {
        this.router.navigate(['/user/signin']);
      }
    }, err => {
      // this.loaderStatus= false;
      this.loader.loaderStatus.next(false);
      this.submitted = true;
      this.captcha.reset();
      this.captchaSelected = false;
      this.tmpPass.nativeElement.value = "";
      this.passwordFC.setValue("");
      this.cPass.nativeElement.value = "";
      this.passwordValid = false;
      this.showError = false;

      if (err.error.message.includes("correct")) {
        this.validationError.tempPasswordError = true;
      }

      this.pass.nativeElement.value = this.validationError.newPasswordError ? "" : this.passwordFC.value;
      this.cPass.nativeElement.value = this.validationError.confirmPasswordError ? "" : this.cPass.nativeElement.value;
      console.log('change paswword service failed', err);
    })
    //  } else{

    //   }
  }

  validate(event) {
    if (event.target.name == "passwordNew") {
      this.hidePasswordError();
      if (this.passwordNew.length > 8) {
        this.showError = false;
      }
      else {
        this.showError = true;
      }
    }

    if (event.target.name == "confPassword") {
      this.hideConfPasswordError();
    }


    // return true
  }

  hasLowerCase(str) {
    return (/[a-z]/.test(str));
  }

  hasUpperCase(str) {
    return (/[A-Z]/.test(str));
  }

  hasNumber(str) {
    return (/[0-9]/.test(str));
  }

  hasSpecialChar(str) {
    return (/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/).test(str);
  }
}
