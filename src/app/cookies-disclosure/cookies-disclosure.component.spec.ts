import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiesDisclosureComponent } from './cookies-disclosure.component';

describe('CookiesDisclosureComponent', () => {
  let component: CookiesDisclosureComponent;
  let fixture: ComponentFixture<CookiesDisclosureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookiesDisclosureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookiesDisclosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
