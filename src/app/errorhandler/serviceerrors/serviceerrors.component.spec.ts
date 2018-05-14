import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceerrorsComponent } from './serviceerrors.component';

describe('ServiceerrorsComponent', () => {
  let component: ServiceerrorsComponent;
  let fixture: ComponentFixture<ServiceerrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceerrorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceerrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
