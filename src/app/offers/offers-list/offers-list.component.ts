import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/entities/offer.entity';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.css']
})
export class OffersListComponent implements OnInit {

  private offers: Offer[];

  constructor() { }

  ngOnInit() {
    const offer1 = new Offer();
    offer1.id = 1;
    offer1.active = true;
    offer1.seatsNumber = 4;
    offer1.departureDate = '22.10.2019';
    offer1.departureTime = '12:00';
    offer1.departurePlace = 'Doboj';
    offer1.destinationPlace = 'Banja Luka';
    offer1.timeCreated = '10:00';
    offer1.dateCreated = '31-12-2018';
    const offer2 = new Offer();
    offer2.id = 2;
    offer2.active = true;
    offer2.seatsNumber = 4;
    offer2.departureDate = '22.10.2019';
    offer2.departureTime = '12:00';
    offer2.departurePlace = 'Bijeljina';
    offer2.destinationPlace = 'Beograd';
    offer2.timeCreated = '10:00';
    offer2.dateCreated = '31-12-2018';
    this.offers = [offer1, offer2];
    this.offers.push(offer1);
    this.offers.push(offer1);
    this.offers.push(offer1);
    this.offers.push(offer1);
    this.offers.push(offer1);
    this.offers.push(offer1);
    this.offers.push(offer1);
    this.offers.push(offer1);
  }

  testId(id: number) {
    console.log(id);
  }
}
