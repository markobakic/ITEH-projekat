import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public redirectRoute = '/login';

  constructor(private _userService: UserService,
              private _router: Router) { }

  ngOnInit(): void {
  }

  get userLoggedIn() {
    return this._userService.getUser();
  }

  public logOut() {
    localStorage.removeItem('user');
    this._router.navigate([this.redirectRoute]);
  }

}
