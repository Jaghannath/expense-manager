import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginDetails } from '../../models/login.model';
import * as EMActions from '../../store/em.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  userName = '';
  password = '';
  emActions = EMActions;

  constructor(
    private readonly store: Store) {
  }

  login() {
    const loginDetails: LoginDetails = {
      username: this.userName,
      password: this.password
    };
    this.store.dispatch(this.emActions.loginClicked({ loginDetails: loginDetails }));
  }
}
