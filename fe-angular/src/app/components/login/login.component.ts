import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public errorMessage: string;
  public loading = false;

  constructor(private _formBuilder: FormBuilder,
              private _authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  public get validForm() {
    return this.loginForm.valid;
  }

  public get emailRequired() {
    const emailControl = this.loginForm.get('email');
    if (emailControl !== null) {
      if (emailControl.errors) {
        return emailControl.errors['required'] && emailControl.touched;
      }
    }
  }
  
  public get invalidEmail() {
    const emailControl = this.loginForm.get('email');
    if (emailControl !== null) {
      if (emailControl.errors) {
        return emailControl.errors['email'] && emailControl.touched;
      }
    }
  }

  public get passwordRequired() {
    const passwordControl = this.loginForm.get('password');
    if (passwordControl !== null) {
      if (passwordControl.errors) {
        return passwordControl.errors['required'] && passwordControl.touched;
      }
    }
  }

  public onSubmit() {
    this.loading = true;

    this._authService.login(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value)
        .pipe(first())
        .subscribe(
            data => {
              this.loading = false;
            },
            error =>{
              this.loading = false;
              this.errorMessage = 'Incorrect password or email!'
            }
        )
  }

}
