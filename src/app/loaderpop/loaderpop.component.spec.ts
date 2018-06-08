import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderpopComponent } from './loaderpop.component';

describe('LoaderpopComponent', () => {
  let component: LoaderpopComponent;
  let fixture: ComponentFixture<LoaderpopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderpopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderpopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
