import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandHeadComponent } from './land-head.component';

describe('LandHeadComponent', () => {
  let component: LandHeadComponent;
  let fixture: ComponentFixture<LandHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
