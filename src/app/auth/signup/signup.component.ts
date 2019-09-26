import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/entities/user.entity';
import { UserInfo } from 'src/app/entities/user-info.entity';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  usernameExists: boolean;
  errorMessage: string;
  successMessage: string;

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
    this.successMessage = null;
  }

  onSubmit() {
    if (this.usernameExists) {
      this.errorMessage = 'Username already exists!';
      this.successMessage = null;
    } else if (!this.passwordsMatch()) {
      this.errorMessage = 'Passwords do not match!';
      this.successMessage = null;
    } else if (!this.signupForm.valid) {
      this.errorMessage = 'Form is not valid!';
      this.successMessage = null;
    } else {
      this.successMessage = 'You have been successfully signed up!';
      this.errorMessage = null;
      const newUser = this.createNewUser();
      this.userService.addUser(newUser).subscribe();
      console.log(newUser);
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

              createNewUser(): User {
                const theUser = new User();
                theUser.role = 'customer';
                theUser.username = this.signupForm.get('username').value;
                theUser.password = this.signupForm.get('password').value;

                const theUserInfo = new UserInfo();
                theUserInfo.firstName = this.signupForm.get('firstName').value;
                theUserInfo.lastName = this.signupForm.get('lastName').value;
                theUserInfo.email = this.signupForm.get('email').value;
                theUserInfo.phone = this.signupForm.get('phone').value;

                theUser.userInfo = theUserInfo;
                return theUser;
              }

  checkUsername() {
    const username: string = this.signupForm.get('username').value;
    this.userService.doesUsernameExist(username)
      .subscribe((data: boolean) => {
        this.usernameExists = data;
      });
  }
}
