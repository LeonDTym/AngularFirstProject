import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn: boolean = false;

  login(): void {
    console.log('User logged in');
    this.isLoggedIn = true;
  }

  logout(): void {
    console.log('User logged out');
    this.isLoggedIn = false;
  }

  getLoginStatus(): boolean {
    return this.isLoggedIn;
  }
}
