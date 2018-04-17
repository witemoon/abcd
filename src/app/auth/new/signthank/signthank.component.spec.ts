import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignthankComponent } from './signthank.component';

describe('SignthankComponent', () => {
  let component: SignthankComponent;
  let fixture: ComponentFixture<SignthankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignthankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignthankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
