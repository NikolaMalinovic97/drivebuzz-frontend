import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/entities/offer.entity';
import { OfferService } from 'src/app/services/offer.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.css']
})
export class OffersListComponent implements OnInit {

  private allOffers: Offer[];
  private pageOffers: Offer[];

  private type: string;
  private numberOfPages: number;
  private pages: number[];
  private currentPage: number;

  constructor(private route: ActivatedRoute, private router: Router,
              private offerService: OfferService) { }

  ngOnInit() {
    this.offerService.loadAllOffers()
      .subscribe((data: Offer[]) => {
        this.allOffers = data;
        this.numberOfPages = Math.ceil(this.allOffers.length / 10);
      });
    this.route.params.subscribe(
      (params: Params) => {
        this.currentPage = +params['page'];
        this.setOffersBasedOnType(params['type']);
        setTimeout(() => {
          this.setPages(this.currentPage);
          this.setPageOffersByPage(this.currentPage);
        },
        200);
      }
    );
  }

  setOffersBasedOnType(type: string) {
    console.log(type);
  }

  setPages(currentPage: number) {
    this.pages = [];
    if (currentPage < 3) {
      for (let i = 1; i <= this.numberOfPages; i++) {
        this.pages.push(i);
      }
    } else {
      const firstPage = this.currentPage - 2;
      const lastPage = this.currentPage + 2;
      for (let i = firstPage; i <= lastPage || i <= this.numberOfPages; i++) {
        this.pages.push(i);
      }
    }
  }

  setPageOffersByPage(page: number) {
    this.pageOffers = [];
    const firstIndex = page * 10 - 10;
    let lastIndex = page * 10 - 1;
    if (lastIndex > this.allOffers.length - 1) {
      lastIndex = this.allOffers.length - 1;
    }
    for (let i = firstIndex; i <= lastIndex; i++) {
      this.pageOffers.push(this.allOffers[i]);
    }
  }

  onPrevious() {
    if (this.currentPage > 1) {
      this.router.navigate(['/offers', --this.currentPage]);
    }
  }

  onNext() {
    if (this.currentPage < this.numberOfPages) {
      this.router.navigate(['/offers', ++this.currentPage]);
    }
  }
}
