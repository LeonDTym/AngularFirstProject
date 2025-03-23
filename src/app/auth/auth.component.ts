import { Component, ViewChild } from '@angular/core';
import { AuthModalComponent } from '../auth-modal/auth-modal.component';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatFormFieldModule, AuthModalComponent],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  @ViewChild(AuthModalComponent) authModal!: AuthModalComponent; // Получаем доступ к AuthModalComponent

  openModal() {
    this.authModal.openModal(); // Вызываем метод openModal из AuthModalComponent
  }

  closeModal() {
    this.authModal.closeModal(); // Вызываем метод closeModal из AuthModalComponent
  }

  onLogin() {
    console.log('User logged in');
  }

  onRegister() {
    console.log('User registered');
  }
}