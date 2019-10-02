import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/entities/offer.entity';
import { OfferService } from 'src/app/services/offer.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SignedUserService } from 'src/app/auth/signin/signed-user.service';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.css']
})
export class OffersListComponent implements OnInit {

  private offers: Offer[];
  private currentPage: number;
  private offersType: string;
  private pages: number[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private offerService: OfferService,
              private signedUserService: SignedUserService) { }

  ngOnInit() {
    this.loadParamsAndOffers();
  }

  loadParamsAndOffers() {
    this.route.params.subscribe(
      (params: Params) => {
        this.currentPage = +params['page'];
        this.offersType = params['type'];
        this.setPages(this.currentPage);
        this.loadOffers();
      }
    );
  }

              loadOffers() {
                if (this.offersType === 'my-offers') {
                  this.offerService.loadSpecificUserOffers(this.signedUserService.getSignedUser().id)
                  .subscribe((data: Offer[]) => {
                    this.offers = data;
                  },
                  error => this.offers = null);
                } else {
                  this.offerService.loadSpecificTypeOffers(this.offersType, this.currentPage)
                    .subscribe((data: Offer[]) => {
                      this.offers = data;
                    },
                    error => this.offers = null);
                }
              }

  setPages(currentPage: number) {
    this.pages = [];
    if (currentPage < 3) {
      for (let i = 1; i <= 5; i++) {
        this.pages.push(i);
      }
    } else {
      const firstPage = this.currentPage - 2;
      const lastPage = this.currentPage + 2;
      for (let i = firstPage; i <= lastPage; i++) {
        this.pages.push(i);
      }
    }
  }

  onPrevious() {
    if (this.currentPage > 1) {
      window.scrollTo(0, 0);
      this.router.navigate(['/offers', this.offersType, --this.currentPage]);
    }
  }

  onNext() {
    window.scrollTo(0, 0);
    this.router.navigate(['/offers', this.offersType, ++this.currentPage]);
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
