import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import { UserSession } from '../User';
import { LoginCredentials } from '../login';
import { Stream } from '../Stream';
import { Camera } from '../cam';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://orchid.ipconfigure.com/service/sessions/user';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Basic ${btoa('liveviewer:tpain')}`,
    })
  };
  private httpHeaders = new HttpHeaders({
    'Content-Type': 'image/jpeg',
    Authorization: `Basic ${btoa('liveviewer:tpain')}`,
  });

  constructor(private http: HttpClient) { }

  login(credentials: LoginCredentials): Observable<UserSession> {
    return this.http.post<any>('https://orchid.ipconfigure.com/service/sessions/user', credentials)
      .pipe(
        map(response => {
          return response as UserSession;
        })
      );
  }

  authenticate(credentials: LoginCredentials): Observable<{ sessionId: string, jwtToken: string }> {
    return this.http.post<UserSession>(this.apiUrl, credentials, this.httpOptions).pipe(
      map(session => {
        const expiresIn = 2592000; // Set JWT expiration time in seconds
        const jwtToken = this.generateJWT(session.id, expiresIn);
        return { sessionId: session.id, jwtToken };
      })
    );
  }

  // getStreams(): Observable<Stream[]> {
  //   const url = `https://orchid.ipconfigure.com/service/cameras`;
  //   return this.http.get<any>(url, {'headers' :this.httpOptions})
  // }

  getCamera() {
    const url = `https://orchid.ipconfigure.com/service/cameras`;
    return this.http.get<any>(url, this.httpOptions);
  }

  getStreams() {
    const url = `https://orchid.ipconfigure.com/service/streams`;
    return this.http.get<any>(url, this.httpOptions);
  }

  getFrames(streamId: string): Observable<Blob> {
    const url = `https://orchid.ipconfigure.com/service/streams/${streamId}/frame`;
  
    return this.http.get(url, { headers: this.httpHeaders, responseType: 'blob' });
  }
  

  private generateJWT(sessionId: string, expiresIn: number): string {
    // Generate JWT token based on the provided session ID and expiration time
    const payload = {
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + expiresIn
    };
    const jwtHeader = { typ: 'JWT', alg: 'HS256' };
    const jwtPayload = btoa(JSON.stringify(payload));
    const jwtSignature = btoa(JSON.stringify(jwtHeader) + '.' + jwtPayload);
    console.log(jwtHeader);
    console.log(payload);
    return `${jwtSignature}`;
  }

}
