import { Injectable } from '@angular/core';
import { Auth0Vars } from './shared/auth.config';

declare var Auth0Lock: any;

@Injectable()
export class AuthService {

  lock = new Auth0Lock(Auth0Vars.AUTH0_CLIENT_ID, Auth0Vars.AUTH0_DOMAIN);

  constructor() { }

  login() {
    this.lock.show((error: string, profile: Object, id_token: string) => {
      if (error) {
        console.log(error);
      }

      localStorage.setItem('profile', JSON.stringify(profile));
      localStorage.setItem('id_token', id_token);
    });
  }

  logout() {
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');
  }
}
