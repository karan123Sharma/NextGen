import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-landingpagecomp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landingpagecomp.component.html',
  styleUrl: './landingpagecomp.component.css'
})
export class LandingpagecompComponent {
  chatbots: any[] = [];
  constructor(private chatbotService: ApiServiceService,private Router:Router) { }
  ngOnInit() {
    if (this.chatbotService.isAuthenticated() == false) {
      this.Router.navigate(['/']);
    } else {
      console.log("Safe");
      console.log(this.chatbotService.isAuthenticated)
      this.fetchChatbots();
    }
  }
  fetchChatbots() {
    this.chatbotService.getChatbots()
      .subscribe((data: any[]) => {
        this.chatbots = data;
      }, (error) => {
        console.error('Error fetching chatbots:', error);
      });
  }
}
