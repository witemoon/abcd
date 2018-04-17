import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignchangepassComponent } from './signchangepass.component';

describe('SignchangepassComponent', () => {
  let component: SignchangepassComponent;
  let fixture: ComponentFixture<SignchangepassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignchangepassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignchangepassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
