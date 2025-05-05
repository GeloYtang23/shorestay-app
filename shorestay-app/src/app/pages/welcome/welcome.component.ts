import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true, // Mark this component as standalone
  imports: [RouterModule], // Import RouterModule for routerLink to work
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'], // Fix typo: styleUrl -> styleUrls
})
export class WelcomeComponent {}