import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempSigninComponent } from './temp-signin.component';

describe('TempSigninComponent', () => {
  let component: TempSigninComponent;
  let fixture: ComponentFixture<TempSigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempSigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
