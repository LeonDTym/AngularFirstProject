import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [MatSidenavModule, MatButtonModule]
})
export class SidebarComponent {
  showFiller = false;
  @Input() isOpen = false;

  toggleSidebar() {
    this.isOpen = !this.isOpen; // Переключаем состояние
  }
}
