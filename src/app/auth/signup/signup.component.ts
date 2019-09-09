import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  usernameExists: boolean;
  errorMessage: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(15),
                                        Validators.pattern(/^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$/)]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
      'repeatPassword': new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'firstName': new FormControl(null, Validators.maxLength(45)),
      'lastName': new FormControl(null, Validators.maxLength(45)),
      'phone': new FormControl(null, Validators.maxLength(20)),
    });
    this.errorMessage = null;
  }

  onSubmit() {
    if (this.usernameExists) {
      this.errorMessage = 'Username already exists!';
    } else if (!this.passwordsMatch()) {
      this.errorMessage = 'Passwords do not match!';
    }
  }

              passwordsMatch(): boolean {
                const password = this.signupForm.get('password').value;
                const repeatPassword = this.signupForm.get('repeatPassword').value;
                if (password === repeatPassword) {
                  return true;
                }
                return false;
              }

  checkUsername() {
    const username: string = this.signupForm.get('username').value;
    this.userService.doesUsernameExist(username)
      .subscribe((data: boolean) => {
        this.usernameExists = data;
      });
  }
}
