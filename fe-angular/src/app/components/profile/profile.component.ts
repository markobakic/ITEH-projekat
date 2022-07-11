import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public userData: any;
  public changeDataForm: FormGroup;
  public loading = false;
  public successfulMessage = null;

  constructor(private _userService: UserService,
              private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getUserDataFromService().subscribe(result => {
      this.userData = result;
    });

    this.changeDataForm = this._formBuilder.group({
      email: ['', [Validators.email]],
      name: ['']
    });
  }

  public get validForm() {
    return this.changeDataForm.valid;
  }

  public get invalidEmail() {
    const emailControl = this.changeDataForm.get('email');
    if (emailControl !== null) {
      if (emailControl.errors) {
        return emailControl.errors['email'] && emailControl.touched;
      }
    }
  }

  public getUserDataFromService() {
    return this._userService.userData();
  }

  public onSubmit() {
    const formValue = this.changeDataForm.value;
    this.loading = true;

    this._userService.updateUserData(formValue).subscribe(result => {
      this.userData.user.name = (result as Array<any>)[1].name;
      this.userData.user.email = (result as Array<any>)[1].email;
      this.successfulMessage = formValue.email || formValue.name ? (result as Array<any>)[0] : null;
      this.changeDataForm.reset();
      this.loading = false;
    });
  }
}
