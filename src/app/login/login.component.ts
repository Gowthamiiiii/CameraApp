import { Component } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { UserSession } from '../User';
import { LoginCredentials } from '../login';
import { SessionService } from '../Services/session.service';
import { Router } from '@angular/router';

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
  public loggedIn: boolean = false;

  constructor(private authService: AuthService,  private sessionService: SessionService, private router: Router) { }

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
        this.sessionService.sessionId = response.sessionId;
        this.sessionService.jwtToken = response.jwtToken;
        console.log(`User session ID: ${this.sessionService.sessionId}`);
        console.log(`JWT Token: ${this.sessionService.jwtToken}`);
        // Do something with the user session ID and JWT token
        this.router.navigate(['/login/cameras']);
        this.loggedIn = true;
      },
      error => {
        //console.log('Authentication failed:', error);
        this.authenticated = false;
        this.sessionService.sessionId = null;
      }
    );
  }
}
