import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-password-login-dialog-component',
  templateUrl: './password-login-dialog-component.component.html',
  styleUrls: ['./password-login-dialog-component.component.css'],
  standalone: true,
  imports: [FormsModule,CommonModule],
})
export class PasswordLoginDialogComponent {
  password: string = "";
  errorMessage: string = "";

  constructor(
    public dialogRef: MatDialogRef<PasswordLoginDialogComponent>,
    private authService: ApiServiceService,
    private router: Router
  ) {}

  login() {
    this.authService.login(this.password).subscribe(
      (response) => {
        console.log('Password entered:', this.password);
        console.log('Response:', response);
        if (response.message == "Login successful") {
          this.authService.setUserId(response.message);
          this.router.navigate(['/landing']);
        }
        else{

          this.dialogRef.close(true);
        }
      },
      error => {
    
        this.errorMessage = error.message;
      }
    );
  }

  closeDialog() {
    this.dialogRef.close(false);
  }
}
