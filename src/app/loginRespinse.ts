export interface LoginResponse {
    sessionId: string;
    jwtToken: string;
    expirationTime?: number;
  }
  