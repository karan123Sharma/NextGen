import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingpagecompComponent } from './landingpagecomp.component';

describe('LandingpagecompComponent', () => {
  let component: LandingpagecompComponent;
  let fixture: ComponentFixture<LandingpagecompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingpagecompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingpagecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
