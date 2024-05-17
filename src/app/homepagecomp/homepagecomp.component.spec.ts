import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepagecompComponent } from './homepagecomp.component';

describe('HomepagecompComponent', () => {
  let component: HomepagecompComponent;
  let fixture: ComponentFixture<HomepagecompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepagecompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomepagecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
