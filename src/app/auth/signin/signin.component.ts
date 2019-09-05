import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { SignedUserService } from './signed-user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  isFormValid = true;

  constructor(private userService: UserService, private signedUserService: SignedUserService) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;
    if (form.valid) {
      this.validateUser(username, password);
    } else {
      this.isFormValid = false;
    }
  }

              validateUser(username: string, password: string) {
                this.signedUserService.signIn(username, password);
                  setTimeout(() => {
                    if (this.signedUserService.getSignedUser() == null) {
                      this.isFormValid = false;
                    } else {
                      this.isFormValid = true;
                    }
                  },
                  400);
              }
}
