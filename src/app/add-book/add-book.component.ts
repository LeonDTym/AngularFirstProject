import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-add-book',
  imports: [MatInputModule, MatFormFieldModule],
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})

export class AddBookComponent {}
