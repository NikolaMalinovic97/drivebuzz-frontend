import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'username': new FormControl(null),
      'password': new FormControl(null),
      'repeatPassword': new FormControl(null),
      'email': new FormControl(null),
      'firstName': new FormControl(null),
      'lastName': new FormControl(null),
      'phone': new FormControl(null),
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }
}
