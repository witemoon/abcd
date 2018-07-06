import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { LandHeadComponent } from '../landing-page/land-head/land-head.component';
import { LandHeroComponent } from '../landing-page/land-hero/land-hero.component';
import { LandCnt01Component } from '../landing-page/land-cnt-01/land-cnt-01.component';
import { LandCnt02Component } from '../landing-page/land-cnt-02/land-cnt-02.component';


import { LandingComponent } from '../landing-page/landing/landing.component';
import { NotFoundComponent } from '../errorhandler/not-found/not-found.component';
import { SignupMainComponent } from '../auth/sign-up/signup-main/signup-main.component';
import { ThankComponent } from '../thank/thank.component';

import { ChangeTempPassComponent } from '../auth-temp/change-temp-pass/change-temp-pass.component';
import { ResetComponent } from '../forgot-password/reset/reset.component';
import { TempSigninComponent } from '../auth-temp/temp-signin/temp-signin.component';
import { SignchangepassComponent } from '../auth/new/signchangepass/signchangepass.component';
import { SignthankComponent } from '../auth/new/signthank/signthank.component';
import { Error401Component } from '../errorhandler/error401/error401.component';
import { ServiceerrorsComponent } from '../errorhandler/serviceerrors/serviceerrors.component';
import { CookiesDisclosureComponent } from '../cookies-disclosure/cookies-disclosure.component';

const appRoutes: Routes = [

  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'user',
    component: SignupMainComponent
  },
  {
    path: 'user/signup',
    component: SignupMainComponent
  },
  {
    path: 'user/signin',
    component: SignupMainComponent
  },
  {
    path: 'temp',
    component: TempSigninComponent
  },
  {
    path: 'signchangepass',
    component: SignchangepassComponent
  },
  {
    path: 'signthank',
    component: SignthankComponent
  },
  {
    path: 'resetPassword',
    component: ResetComponent
  },
  {
    path: 'thankyou',
    component: ThankComponent
  },
  {
    path: 'changeTempPass',
    component: ChangeTempPassComponent
  },
  {
    path: 'dashboard',
    loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'error401',
    component: Error401Component
  },
  {
    path: 'serviceerrors',
    component: ServiceerrorsComponent
  },
  {
    path: 'cookiesdisclosure',
    component: CookiesDisclosureComponent
  },
  {
    path: '**',
    component: ServiceerrorsComponent
  },

];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
