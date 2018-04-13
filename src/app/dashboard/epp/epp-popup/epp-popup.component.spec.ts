import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EppPopupComponent } from './epp-popup.component';

describe('EppPopupComponent', () => {
  let component: EppPopupComponent;
  let fixture: ComponentFixture<EppPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EppPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EppPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
