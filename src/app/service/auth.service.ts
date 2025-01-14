import { Injectable } from '@angular/core';
import { AuthConst } from '../components/constants/auth.const';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn() {
    return !!localStorage.getItem(AuthConst.tokenName);
  }

  setToken(token: string) {
    localStorage.setItem(AuthConst.tokenName, token);
  }

  removeToken() {
    localStorage.removeItem(AuthConst.tokenName);
  }
}
