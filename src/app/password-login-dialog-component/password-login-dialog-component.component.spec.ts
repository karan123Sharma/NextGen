import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordLoginDialogComponentComponent } from './password-login-dialog-component.component';

describe('PasswordLoginDialogComponentComponent', () => {
  let component: PasswordLoginDialogComponentComponent;
  let fixture: ComponentFixture<PasswordLoginDialogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordLoginDialogComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasswordLoginDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
