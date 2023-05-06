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
  jwtToken: string | null = null;


  constructor(private authService: AuthService) { }

  onSubmit() {
    const credentials: LoginCredentials = {
      username: 'liveviewer',
      password: 'tpain',
      expiresIn: 0,
      cookie: 'session'
    };

    this.authService.authenticate(credentials).subscribe(
      response => {
        this.authenticated = true;
        this.userSessionId = response.sessionId;
        this.jwtToken = response.jwtToken;
        console.log(`User session ID: ${this.userSessionId}`);
        console.log(`JWT Token: ${this.jwtToken}`);
        // Do something with the user session ID and JWT token
      },
      error => {
        console.log('Authentication failed:', error);
        this.authenticated = false;
        this.userSessionId = null;
      }
    );
  }
}
