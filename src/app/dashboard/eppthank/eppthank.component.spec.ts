import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EppthankComponent } from './eppthank.component';

describe('EppthankComponent', () => {
  let component: EppthankComponent;
  let fixture: ComponentFixture<EppthankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EppthankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EppthankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
