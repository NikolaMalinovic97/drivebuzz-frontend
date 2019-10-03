import { Component, OnInit } from '@angular/core';
import { SignedUserService } from '../auth/signin/signed-user.service';
import { User } from '../entities/user.entity';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  private user: User;
  private changeInfoMode: boolean;

  constructor(private signedUserService: SignedUserService) { }

  ngOnInit() {
    this.user = this.signedUserService.getSignedUser();
    this.changeInfoMode = false;
  }

  onChangeInfo() {
    this.changeInfoMode = true;
  }

  onDismiss() {
    this.changeInfoMode = false;
  }
}
