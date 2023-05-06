export interface UserSession {
    type: string;
    id: string;
    href: string;
    name: string;
    role: string;
    scope: {
      baseScope: string[];
      cameraScopes: {
        id: number;
        scope: string[];
      }[];
    };
    owner: {
      href: string;
      id: string;
    };
    expiresIn: number;
  }
  