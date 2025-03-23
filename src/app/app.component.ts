import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddBookComponent } from "./add-book/add-book.component";
import { AuthComponent } from "./auth/auth.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { AuthModalComponent } from "./auth-modal/auth-modal.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AddBookComponent, AuthComponent, NavigationComponent, RouterModule, AuthModalComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
}
