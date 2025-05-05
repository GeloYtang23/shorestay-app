import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: any[] = [];

  constructor() { }

  register(user: any) {
    this.users.push(user);
    console.log('Users:', this.users);
  }

  login(username: string, password: string): boolean {
    return this.users.some(user => user.username === username && user.password === password);
  }
}
