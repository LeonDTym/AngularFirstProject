import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthService } from './auth.service';
import { ProtectedComponent } from './protected.component';


@Component({
  selector: 'app-login',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  imports: [ProtectedComponent],
  template: `
    <button (click)="authService.login()">Login</button>
    <button (click)="authService.logout()">Logout</button>
    <button (click)="toggleLogin()">Toggle Login State</button>


    <div appLoginState></div>
    <div *appLoginVisibility>
      <app-protected></app-protected>
    </div>
  `,

})
export class LoginComponent {
  constructor(public authService: AuthService) {}


  toggleLogin(): void {
    if (this.authService.getLoginStatus()) {
      this.authService.logout();
    } else {
      this.authService.login();
    }
  }
}
