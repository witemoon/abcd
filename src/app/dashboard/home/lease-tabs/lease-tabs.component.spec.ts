import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaseTabsComponent } from './lease-tabs.component';

describe('LeaseTabsComponent', () => {
  let component: LeaseTabsComponent;
  let fixture: ComponentFixture<LeaseTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaseTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaseTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
