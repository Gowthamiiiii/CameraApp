import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { UserSession } from '../User';
import { LoginCredentials } from '../login';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://orchid.ipconfigure.com/service/sessions/user';
  private trustedIssuerUrl = 'https://orchid.ipconfigure.com/service/trustedissuer';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Basic ${btoa('liveviewer:tpain')}`
    })
  };

  constructor(private http: HttpClient) { }

  login(credentials: LoginCredentials): Observable<UserSession> {
    return this.http.post<any>('https://orchid.ipconfigure.com/service/sessions/user', credentials)
      .pipe(
        map(response => {
          return response as UserSession;
        })
      );
  }

  authenticate(credentials: LoginCredentials): Observable<{sessionId: string, jwtToken: string}> {
    return this.http.post<UserSession>(this.apiUrl, credentials, this.httpOptions).pipe(
      map(session => {
        const expiresIn = 3600; // Set JWT expiration time in seconds
        const jwtToken = this.generateJWT(session.id, expiresIn);
        return {sessionId: session.id, jwtToken};
      })
    );
  }

  private generateJWT(sessionId: string, expiresIn: number): string {
    // Generate JWT token based on the provided session ID and expiration time
    const payload = {
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + expiresIn,
      scope: ['admin'],
      sessionId: sessionId
    };
    const jwtHeader = { typ: 'JWT', alg: 'HS256' };
    const jwtPayload = btoa(JSON.stringify(payload));
    const jwtSignature = btoa(JSON.stringify(jwtHeader) + '.' + jwtPayload + 'SECRET_KEY');
    return `${JSON.stringify(jwtHeader)}.${jwtPayload}.${jwtSignature}`;
  }

}
