import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandHeroComponent } from './land-hero.component';

describe('LandHeroComponent', () => {
  let component: LandHeroComponent;
  let fixture: ComponentFixture<LandHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
