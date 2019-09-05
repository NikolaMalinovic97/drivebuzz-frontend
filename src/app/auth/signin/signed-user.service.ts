import { Injectable } from '@angular/core';
import { User } from 'src/app/entities/user.entity';
import { UserService } from 'src/app/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class SignedUserService {

  private signedUser: User = null;

  constructor(private userService: UserService) { }

  getSignedUser() {
    return this.signedUser;
  }

  isUserSigned() {
    if (this.signedUser == null) {
      return false;
    } else {
      return true;
    }
  }

  signIn(username: string, password: string) {
    this.userService.validateUser(username, password)
        .subscribe((data: User) => {
          this.signedUser = data;
        });
  }

  logOut() {
    this.signedUser = null;
  }
}
