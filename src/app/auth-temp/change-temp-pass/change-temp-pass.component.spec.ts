import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeTempPassComponent } from './change-temp-pass.component';

describe('ChangeTempPassComponent', () => {
  let component: ChangeTempPassComponent;
  let fixture: ComponentFixture<ChangeTempPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeTempPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeTempPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
