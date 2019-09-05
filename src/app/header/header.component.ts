import { Component, OnInit } from '@angular/core';
import { SignedUserService } from '../auth/signin/signed-user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private signedUserService: SignedUserService) { }

  ngOnInit() {
  }

  onLogOut() {
    this.signedUserService.logOut();
  }
}
