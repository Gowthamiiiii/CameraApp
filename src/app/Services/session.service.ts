import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private readonly JWT_TOKEN_KEY = 'jwtToken';
  private readonly SESSION_ID_KEY = 'sessionId';

  constructor() { }

  get jwtToken(): string | null {
    return localStorage.getItem(this.JWT_TOKEN_KEY);
  }

  set jwtToken(value: string | null) {
    if (value) {
      localStorage.setItem(this.JWT_TOKEN_KEY, value);
    } else {
      localStorage.removeItem(this.JWT_TOKEN_KEY);
    }
  }

  get sessionId(): string | null {
    return localStorage.getItem(this.SESSION_ID_KEY);
  }

  set sessionId(value: string | null) {
    if (value) {
      localStorage.setItem(this.SESSION_ID_KEY, value);
    } else {
      localStorage.removeItem(this.SESSION_ID_KEY);
    }
  }

  setSessionId(value: string) {
    localStorage.setItem(this.SESSION_ID_KEY, value);
  }

  removeSessionId() {
    localStorage.removeItem(this.SESSION_ID_KEY);
  }
}
