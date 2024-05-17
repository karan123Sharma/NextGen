import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RecaptchaComponent, RecaptchaModule } from 'ng-recaptcha';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { PasswordDialogComponent } from '../password-dialog/password-dialog.component';
import { PasswordLoginDialogComponent } from '../password-login-dialog-component/password-login-dialog-component.component';

@Component({
  selector: 'app-homepagecomp',
  standalone:true,
  templateUrl: './homepagecomp.component.html',
  styleUrls: ['./homepagecomp.component.css'],
  imports:[FormsModule,CommonModule,RecaptchaModule]
})
export class HomepagecompComponent {

  password: string = '';
  captcha: string;
  email: string;
  isDialogOpen: boolean = false;

  constructor(private ApiService: ApiServiceService, public dialog: MatDialog) {
    this.captcha = "";
    this.email = "";
  }

  resolved(event: any) {
    const captchaResponse = event as string; 
    this.captcha = captchaResponse;
    console.log(this.captcha);
  }

  generatePassword() {
    if (this.isDialogOpen) return; 

    this.isDialogOpen = true;
    const dialogRef = this.dialog.open(PasswordDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.isDialogOpen = false;
    });

    this.ApiService.generatePassword(this.email).subscribe(
      (response) => {
        console.log('Password generated successfully:', response);
      },
      (error) => {
        console.error('Error generating password:', error);
      }
    );
  }

  loginWithPassword() {
    if (this.isDialogOpen) {
      return;
    }
    this.isDialogOpen = true; 
    const dialogRef = this.dialog.open(PasswordLoginDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.isDialogOpen = false;
    });
  }
  onGeneratePasswordClick(): void {
    this.ApiService.openCaptchaDialog();
  }
}
