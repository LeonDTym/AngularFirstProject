import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { SidebarComponent } from "./sidebar/sidebar/sidebar.component";


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  imports: [SidebarComponent]
})
export class NavigationComponent {
  constructor(private authService: AuthService) {

  }
  
  isSidebarOpen = false; // Состояние бокового меню

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen; // Переключаем состояние
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
