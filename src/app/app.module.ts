import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './routing/routing';


import { RecaptchaModule, RecaptchaSettings, RECAPTCHA_SETTINGS } from 'ng-recaptcha';
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';


import { AppComponent } from './app.component';
import { SignupFormComponent } from './auth/sign-up/signup-form/signup-form.component';
import { LandHeadComponent } from './landing-page/land-head/land-head.component';
import { LandHeroComponent } from './landing-page/land-hero/land-hero.component';
import { LandCnt01Component } from './landing-page/land-cnt-01/land-cnt-01.component';
import { LandCnt02Component } from './landing-page/land-cnt-02/land-cnt-02.component';


import { LandingComponent } from './landing-page/landing/landing.component';
import { NotFoundComponent } from './errorhandler/not-found/not-found.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';

import { SignupStatComponent } from './auth/sign-up/signup-stat/signup-stat.component';
import { SignupMainComponent } from './auth/sign-up/signup-main/signup-main.component';
import { ThankComponent } from './thank/thank.component';


import { ChangeTempPassComponent } from './auth-temp/change-temp-pass/change-temp-pass.component';
import { ResetComponent } from './forgot-password/reset/reset.component';
import { EqualValidator } from './equal-validator.directive';
import { AuthService } from './shared/auth.service';
import { TempSigninComponent } from './auth-temp/temp-signin/temp-signin.component';


import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <== add the imports!
import { SigninComponent } from './auth-temp/signin/signin.component';
import { SignthankComponent } from './auth/new/signthank/signthank.component';
import { SignchangepassComponent } from './auth/new/signchangepass/signchangepass.component';




@NgModule({
  declarations: [
    AppComponent,
    LandHeadComponent,
    LandHeroComponent,
    LandCnt01Component,
    LandCnt02Component,

    SignInComponent,
    LandingComponent,
    NotFoundComponent,
    SignupFormComponent,
    SignupStatComponent,
    SignupMainComponent,
    ThankComponent,
 
  
    ChangeTempPassComponent,
  
    ResetComponent,


    EqualValidator,


    SigninComponent,

    TempSigninComponent,

    SignthankComponent,

    SignchangepassComponent




  

  ],
  imports: [
    BrowserModule,
    routing,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  
   
 
  ],
providers: [AuthService,{
  provide: RECAPTCHA_SETTINGS,
  useValue: { 
    siteKey: '6LeAyiAUAAAAAFBfMpYA4iGyFQssmt99CpCLr8Ru',
  } as RecaptchaSettings,
}],
  bootstrap: [AppComponent]
})
export class AppModule { }

