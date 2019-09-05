import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignedUserService } from './signed-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  isFormValid = true;

  constructor(private router: Router, private signedUserService: SignedUserService) { }

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
                    if (this.signedUserService.isUserSigned()) {
                      this.isFormValid = true;
                      this.router.navigate(['home']);
                    } else {
                      this.isFormValid = false;
                    }
                  },
                  400);
              }
}
