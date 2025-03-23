import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Импорт CommonModule

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss'],
  standalone: true, // Указываем, что компонент является независимым
  imports: [CommonModule] // Добавляем CommonModule в импорты
})
export class AuthModalComponent {
  isOpen: boolean = false; // Переменная состояния для управления видимостью модального окна

  openModal() {
    this.isOpen = true; // Метод для открытия модального окна
  }

  closeModal() {
    this.isOpen = false; // Метод для закрытия модального окна
  }
}