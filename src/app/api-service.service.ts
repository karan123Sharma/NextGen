import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs/internal/Observable';
import { HomepagecompComponent } from './homepagecomp/homepagecomp.component';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private readonly USER_ID_KEY = 'user_Id';

  private baseUrl = "http://localhost:3000/";

  constructor(private http: HttpClient,private dialog:MatDialog) {

   }

  isAuthenticated(): boolean {
    console.log(this.getUserId());
    if(this.getUserId() === "Login successful"){
      return true;
    }
    else{
      return false;
    }
  }

  removeUserId():void{
    localStorage.removeItem(this.USER_ID_KEY);
  }

   generatePassword(email: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}generate-password`, {email});
  }

  getUserId(): string | null {
    return localStorage.getItem(this.USER_ID_KEY);
  }

  login(password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}login`, {password});
  }


  setUserId(userId: string): void {
    localStorage.setItem(this.USER_ID_KEY, userId);
  }


  getChatbots(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}chatbots`);
  }
  openCaptchaDialog(): void {

  }




}
