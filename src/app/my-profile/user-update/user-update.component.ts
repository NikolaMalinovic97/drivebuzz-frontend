import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/entities/user.entity';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  @Input() user: User;
  updateForm: FormGroup;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.createUpdateForm();
    this.setInitialValuesForForm();
  }

              createUpdateForm() {
                this.updateForm = new FormGroup({
                  'username': new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(15),
                                                    Validators.pattern(/^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$/)]),
                  'firstName': new FormControl(null, Validators.maxLength(45)),
                  'lastName': new FormControl(null, Validators.maxLength(45)),
                  'email': new FormControl(null, [Validators.required, Validators.email]),
                  'phone': new FormControl(null, Validators.maxLength(20)),
                });
              }

              setInitialValuesForForm() {
                this.updateForm.get('username').setValue(this.user.username);
                this.updateForm.get('firstName').setValue(this.user.userInfo.firstName);
                this.updateForm.get('lastName').setValue(this.user.userInfo.lastName);
                this.updateForm.get('email').setValue(this.user.userInfo.email);
                this.updateForm.get('phone').setValue(this.user.userInfo.phone);
              }

  onSave() {
    this.setNewUserValues();
    this.userService.updateUser(this.user).subscribe();
  }

  setNewUserValues() {
    this.user.username = this.updateForm.get('username').value;
    this.user.userInfo.firstName = this.updateForm.get('firstName').value;
    this.user.userInfo.lastName = this.updateForm.get('lastName').value;
    this.user.userInfo.email = this.updateForm.get('email').value;
    this.user.userInfo.phone = this.updateForm.get('phone').value;
  }
}
