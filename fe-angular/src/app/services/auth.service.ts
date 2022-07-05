import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map } from 'rxjs';
import { BASE_URL } from '../constants/app.constants';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public baseUrl = BASE_URL;
  public redirectRoute = '/products';

  constructor(private _http: HttpClient,
              private _router: Router) { }

  public register(user: User) {
    return this._http.post(`${this.baseUrl}/register`, user);
  }

  public login(email: string, password: string) {
    return this._http.post(`${this.baseUrl}/login`, { email: email, password: password })
      .pipe(map(user => {
        localStorage.setItem('user', JSON.stringify(user));
        this._router.navigate([this.redirectRoute]);
        return user;
      }))
  }
}
