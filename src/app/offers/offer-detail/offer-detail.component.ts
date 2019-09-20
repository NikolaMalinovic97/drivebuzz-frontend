import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfferService } from 'src/app/services/offer.service';
import { Offer } from 'src/app/entities/offer.entity';

@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.component.html',
  styleUrls: ['./offer-detail.component.css']
})
export class OfferDetailComponent implements OnInit {

  private offer: Offer;

  constructor(private route: ActivatedRoute, private offerService: OfferService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        const id = +params['id'];
        this.offerService.getOfferById(id)
          .subscribe((data: Offer) => {
            this.offer = data;
          });
      }
    );
  }

}
