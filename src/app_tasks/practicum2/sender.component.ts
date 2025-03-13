import { Component } from '@angular/core';
import { DataService } from './data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sender',
  standalone: true,
  imports: [FormsModule],
  template: `
      <input [(ngModel)]="newMessage" name="message" placeholder="Введите новое сообщение" />
      <button (click)="sendMessage()">Отправить сообщение</button>
  `,
})
export class SenderComponent {
  newMessage: string = '';

  constructor(private dataService: DataService) {}

  sendMessage(): void {
    console.log('sender comp',this.newMessage);
    this.dataService.setMessage(this.newMessage);
  }
}
