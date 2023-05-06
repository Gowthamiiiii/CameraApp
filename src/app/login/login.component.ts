import { Component } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { UserSession } from '../User';
import { LoginCredentials } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  authenticated: boolean = false;
  username: string = '';
  password: string = '';
  userSessionId: string | null = null;


  constructor(private authService: AuthService) { }

  onSubmit() {
    const credentials: LoginCredentials = {
      username: 'liveviewer',
      password: 'tpain',
      expiresIn: 0,
      cookie: 'session'
    };

    this.authService.authenticate(credentials).subscribe(
      sessionId => {
        this.authenticated = true;
        this.userSessionId = sessionId;
        console.log(`User session ID: ${this.userSessionId}`);
        // Do something with the user session ID, such as using it to access other services
      },
      error => {
        console.log('Authentication failed:', error);
        this.authenticated = false;
        this.userSessionId = null;
      }
    );
  }
}
