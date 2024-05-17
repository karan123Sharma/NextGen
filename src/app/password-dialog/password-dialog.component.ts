import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { RecaptchaComponent, RecaptchaModule } from 'ng-recaptcha';
import { ApiServiceService } from '../api-service.service';
@Component({
  selector: 'app-password-dialog',
  standalone: true,
  templateUrl: './password-dialog.component.html',
  styleUrl: './password-dialog.component.css',
  imports:[RecaptchaModule,FormsModule]
})
export class PasswordDialogComponent {
  
  constructor(public dialogRef: MatDialogRef<PasswordDialogComponent>, private ApiService: ApiServiceService) {}
  email: string = '';
  captchaResponse: string | null = null;

  resolved(event: any): void {
    const responseElement = document.getElementsByName('g-recaptcha-response')[0] as HTMLInputElement;
    if (responseElement && responseElement.value) {
      this.captchaResponse = responseElement.value;
      console.log(`Resolved captcha with response: ${this.captchaResponse}`);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onGenerate(): void {
    const email = this.email;
    if (!this.email) {
      alert('Please enter an email address.');
      return;
    }

    if (this.captchaResponse) {
      console.log('Password generated');
      this.ApiService.generatePassword(this.email).subscribe(
        (response) => {
          console.log(this.email);
          console.log('Password generated successfully:', response);
        },
        (error) => {
          console.error('Error generating password:', error);
        }
      );
      this.dialogRef.close();
    } else {
      alert('Please complete the reCAPTCHA');
    }
  }
}
