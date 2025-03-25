import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-book',
  imports: [MatInputModule, MatFormFieldModule],
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})

export class AddBookComponent {
  constructor(private router: Router){}

  openAuth() {
    this.router.navigate(['/auth']);
  }
}
