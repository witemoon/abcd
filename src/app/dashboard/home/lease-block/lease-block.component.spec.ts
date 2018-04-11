import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaseBlockComponent } from './lease-block.component';

describe('LeaseBlockComponent', () => {
  let component: LeaseBlockComponent;
  let fixture: ComponentFixture<LeaseBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaseBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaseBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
