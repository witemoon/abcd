import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandCnt02Component } from './land-cnt-02.component';

describe('LandCnt02Component', () => {
  let component: LandCnt02Component;
  let fixture: ComponentFixture<LandCnt02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandCnt02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandCnt02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
