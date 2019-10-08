import { Component, OnInit } from '@angular/core';
import { SignedUserService } from '../auth/signin/signed-user.service';
import { User } from '../entities/user.entity';
import { Offer } from '../entities/offer.entity';
import { OfferService } from '../services/offer.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  private user: User;
  private changeInfoMode: boolean;

  private offers: Offer[];
  private numberOfActiveOffers: number;
  private numberOfDoneOffers: number;

  constructor(private signedUserService: SignedUserService, private offerService: OfferService) { }

  ngOnInit() {
    this.user = this.signedUserService.getSignedUser();
    this.changeInfoMode = false;
    this.loadOffers();
  }

  loadOffers() {
    this.offerService.loadSpecificUserOffers(this.user.id)
      .subscribe((data: Offer[]) => {
        this.offers = data;
        this.numberOfActiveOffers = this.getNumberOfActiveOffers();
        this.numberOfDoneOffers = this.getNumberOfDoneOffers();
      });
  }

  onChangeInfo() {
    this.changeInfoMode = true;
  }

  onDismiss() {
    this.changeInfoMode = false;
  }

  getNumberOfActiveOffers() {
    let number = 0;
    for (const offer of this.offers) {
      if (offer.active === true) {
        number++;
      }
    }
    return number;
  }

  getNumberOfDoneOffers() {
    let number = 0;
    for (const offer of this.offers) {
      if (offer.active === false) {
        number++;
      }
    }
    return number;
  }
}
