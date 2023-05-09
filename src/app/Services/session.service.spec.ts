import { TestBed } from '@angular/core/testing';

import { SessionService } from './session.service';

describe('SessionService', () => {
  let service: SessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionService);
  });

  it('should retrieve JWT token from localStorage', () => {
    localStorage.setItem('jwtToken', 'my-token');
    expect(service.jwtToken).toBe('my-token');
  });

  it('should retrieve JWT token from localStorage', () => {
    localStorage.setItem('jwtToken', 'my-token');
    expect(service.jwtToken).toBe('my-token');
  });
  
  it('should retrieve JWT token from localStorage', () => {
    localStorage.setItem('jwtToken', 'my-token');
    expect(service.jwtToken).toBe('my-token');
  });
    
  it('should set session ID in localStorage', () => {
    service.sessionId = 'my-session-id';
    expect(localStorage.getItem('sessionId')).toBe('my-session-id');
  });
  
  it('should set session ID in localStorage using setSessionId()', () => {
    service.setSessionId('my-session-id');
    expect(localStorage.getItem('sessionId')).toBe('my-session-id');
  });
  
  it('should remove session ID from localStorage using removeSessionId()', () => {
    localStorage.setItem('sessionId', 'my-session-id');
    service.removeSessionId();
    expect(localStorage.getItem('sessionId')).toBeNull();
  });
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
