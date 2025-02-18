import { Component } from '@angular/core';
import { UserInfoComponent } from './user-info/user-info.component';
import { MoreInfoButtonComponent } from './more-info-button/more-info-button.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [UserInfoComponent, MoreInfoButtonComponent, RouterOutlet]
})
export class AppComponent {
  title = 'AngularFirstProject';
}
