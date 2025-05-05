import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-userpage',
  standalone: true,
  imports: [CommonModule], // Import CommonModule for *ngFor and other directives
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent {
  listings = [
    { title: 'Room 1', rating: 4.5, image: '/app/assets/room.jpg' },
    { title: 'Room 2', rating: 4.5, image: '/app/assets/room.jpg' },
    { title: 'Cottage 1', rating: 4.5, image: '/app/assets/room.jpg' },
    { title: 'Cottage 2', rating: 4.5, image: '/app/assets/room.jpg' }
  ];
}