import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RecaptchaFormsModule, RecaptchaModule } from "ng-recaptcha";
import { AppComponent } from './app.component';
import { HomepagecompComponent } from './homepagecomp/homepagecomp.component';
import { LandingpagecompComponent } from './landingpagecomp/landingpagecomp.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepagecompComponent,
    LandingpagecompComponent,
    RecaptchaModule,
    RecaptchaFormsModule
    // Add other component declarations here
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]), 
    ReactiveFormsModule,
    // Add your routes here when you have them
    // Add other module imports here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
