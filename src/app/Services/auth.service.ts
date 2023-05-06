import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserSession } from '../User';
import { LoginCredentials } from '../login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://orchid.ipconfigure.com/service/sessions/user';
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

  authenticate(credentials: LoginCredentials): Observable<string> {
    return this.http.post<UserSession>(this.apiUrl, credentials, this.httpOptions).pipe(
      map(response => {
        console.log(response)
        return response.id;
      })
    );
  }

}
