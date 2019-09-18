import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Offer } from '../entities/offer.entity';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  url = 'http://localhost:8080/offer-api/offers';
  headers = new HttpHeaders({'Access-Control-Allow-Origin' : '*'});

  constructor(private http: HttpClient) { }

  loadAllOffers() {
    return this.http.get(this.url, {headers: this.headers});
  }
}
