import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ers-frontend';
  
  constructor(private authService: AuthService){}

  isLoggedIn(): boolean {
    return this.authService.loggedIn;
  }
}
