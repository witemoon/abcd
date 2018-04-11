import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandCnt01Component } from './land-cnt-01.component';

describe('LandCnt01Component', () => {
  let component: LandCnt01Component;
  let fixture: ComponentFixture<LandCnt01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandCnt01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandCnt01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
