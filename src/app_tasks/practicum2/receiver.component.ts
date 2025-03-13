import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-receiver',
  standalone: true,
  template: `
    <div>
      <p>Полученное сообщение: {{ message }}</p>
    </div>
  `,
})
export class ReceiverComponent implements OnInit {
  message: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.message = this.dataService.getMessage();
    this.dataService.messageChange.subscribe((newMessage: string) => {
      this.message = newMessage;
    });
  }
}
