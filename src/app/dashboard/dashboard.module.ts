import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';
import { RightSideBarComponent } from './right-side-bar/right-side-bar.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { HomeComponent } from './home/home.component';
import { LeaseBlockComponent } from './home/lease-block/lease-block.component';
import { LeaseDetailComponent } from './home/lease-detail/lease-detail.component';
import { LeaseTabsComponent } from './home/lease-tabs/lease-tabs.component';
import { EppComponent } from './epp/epp.component';
import { ClaimsComponent } from './claims/claims.component';
import { EolComponent } from './eol/eol.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { AlertsPopupComponent } from './alerts-popup/alerts-popup.component';
import { PaymentHelpPopupComponent } from './payment-help-popup/payment-help-popup.component';

const dashboardRoute: Routes = [
  { path: '', component: DashboardComponent,
    children: [
      { path:'home', component: HomeComponent },
      { path:'epp', component: EppComponent },
      { path:'claims', component: ClaimsComponent },
      { path:'eol', component: EolComponent },
      { path:'faq', component: FaqComponent },
      { path:'contact', component: ContactComponent },
    ]
 },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoute),
  ],
  declarations: [
                  DashboardComponent, 
                  LeftSideBarComponent,
                  RightSideBarComponent,
                  HeaderComponent,
                  BreadcrumbComponent,
                  HomeComponent,
                  LeaseBlockComponent,
                  LeaseDetailComponent,
                  LeaseTabsComponent,
                  EppComponent,
                  ClaimsComponent,
                  EolComponent,
                  FaqComponent,
                  ContactComponent,
                  AlertsPopupComponent,
                  PaymentHelpPopupComponent
              ]
})
export class DashboardModule { }
