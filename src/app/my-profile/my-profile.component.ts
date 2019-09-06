import { Component, OnInit } from '@angular/core';
import { SignedUserService } from '../auth/signin/signed-user.service';
import { User } from '../entities/user.entity';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  user: User;

  constructor(private signedUserService: SignedUserService) { }

  ngOnInit() {
    this.user = this.signedUserService.getSignedUser();
  }

}
