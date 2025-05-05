import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], // Add this if you have a CSS file
})
export class LoginComponent {
  constructor(private router: Router) {}

  // Navigate to WelcomeComponent
  navigateToWelcome() {
    this.router.navigate(['/']);
  }
}