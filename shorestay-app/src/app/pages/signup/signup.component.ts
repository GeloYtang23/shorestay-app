import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'], // Add this if you have a CSS file
})
export class SignupComponent {
  constructor(private router: Router) {}

  // Navigate to WelcomeComponent
  navigateToWelcome() {
    this.router.navigate(['/']);
  }
}