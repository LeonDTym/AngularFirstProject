import { Component } from '@angular/core';

@Component({
  selector: 'app-protected',
  template: `
    <div>
      <h2>Защищенный контент</h2>
      <p>Этот контент виден только авторизованным пользователям!</p>
    </div>
  `,
})
export class ProtectedComponent {}
