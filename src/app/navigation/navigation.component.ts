import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  constructor(private authService: AuthService) {

  }

  openAuth() {
    console.log('Open authentication modal');
    // Вызываем метод openModal у существующего экземпляра AuthComponent
    this.authService.openModal();

  }

  addBook() {
    console.log('Add book functionality triggered');
    // Logic to add a new book
  }
}
