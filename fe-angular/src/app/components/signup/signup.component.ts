import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public registerForm: FormGroup;
  public result: any;
  public loading = false;

  constructor(private _formBuilder: FormBuilder,
              private _authService: AuthService) { }

  ngOnInit(): void {
    this.registerForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  public get validForm(): boolean {
    return this.registerForm.valid;
  }

  public get emailRequired() {
    const emailControl = this.registerForm.get('email');
    if (emailControl !== null) {
      if (emailControl.errors) {
        return emailControl.errors['required'] && emailControl.touched;
      }
    }
  }

  public get invalidEmail() {
    const emailControl = this.registerForm.get('email');
    if (emailControl !== null) {
      if (emailControl.errors) {
        return emailControl.errors['email'] && emailControl.touched;
      }
    }
  }

  public get nameRequired() {
    const nameControl = this.registerForm.get('name');
    if (nameControl !== null) {
      if (nameControl.errors) {
        return nameControl.errors['required'] && nameControl.touched;
      }
    }
  }

  public get passwordRequired() {
    const passwordControl = this.registerForm.get('password');
    if (passwordControl !== null) {
      if (passwordControl.errors) {
        return passwordControl.errors['required'] && passwordControl.touched;
      }
    }
  }

  public get passwordMinLength() {
    const passwordControl = this.registerForm.get('password');
    if (passwordControl !== null) {
      if (passwordControl.errors) {
        return passwordControl.errors['minlength'] && passwordControl.touched;
      }
    }
  }

  public onSubmit() {
    this.loading = true;

    this._authService.register(this.registerForm.value).pipe(first()).subscribe(
      result => {
        this.result = result;
        this.loading = false;
      }
    );
  }
}
