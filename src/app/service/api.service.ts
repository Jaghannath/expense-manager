import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoginDetails } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  login(loginDetails: LoginDetails): Observable<boolean> {
    return of(true);
  }
}
