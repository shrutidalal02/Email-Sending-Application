import { Component } from '@angular/core';
import { EmailComponentComponent } from './email-component/email-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmailComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'email-app';
}
