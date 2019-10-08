import { Component, OnInit, Input, AfterViewChecked, OnChanges } from '@angular/core';
import { Offer } from 'src/app/entities/offer.entity';

@Component({
  selector: 'app-my-offers',
  templateUrl: './my-offers.component.html',
  styleUrls: ['./my-offers.component.css']
})
export class MyOffersComponent implements OnInit, OnChanges {

  @Input() offers: Offer[];
  private offer: Offer;
  private currentIndex: number;

  constructor() { }

  ngOnInit() {
    this.currentIndex = 0;
  }

  ngOnChanges() {
    if (this.offers !== undefined) {
      this.updateOffer();
    }
  }

  onPrevious() {
    if (this.currentIndex === 0) {
      this.currentIndex = this.offers.length - 1;
      this.updateOffer();
    } else {
      this.currentIndex--;
      this.updateOffer();
    }
  }

  onNext() {
    if (this.currentIndex === this.offers.length - 1) {
      this.currentIndex = 0;
      this.updateOffer();
    } else {
      this.currentIndex++;
      this.updateOffer();
    }
  }

              updateOffer() {
                this.offer = this.offers[this.currentIndex];
              }
}
