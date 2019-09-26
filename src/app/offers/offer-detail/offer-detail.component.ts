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

  private latitude = 51.678418;
  private longitude = 7.809007;

  private latitude2 = 51.878418;
  private longitude2 = 7.919007;

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
