import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private message: string = 'Initial message';
  messageChange: Subject<string> = new Subject<string>();

  setMessage(newMessage: string): void {
    console.log('Текст при отпраке',newMessage);
    this.message = newMessage;
    this.messageChange.next(this.message);
  }

  getMessage(): string {
    console.log(this.message);
    return this.message;
  }
}
