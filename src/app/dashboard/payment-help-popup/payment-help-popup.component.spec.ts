import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentHelpPopupComponent } from './payment-help-popup.component';

describe('PaymentHelpPopupComponent', () => {
  let component: PaymentHelpPopupComponent;
  let fixture: ComponentFixture<PaymentHelpPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentHelpPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentHelpPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
