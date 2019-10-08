import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule} from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { HomeContentComponent } from './home/home-content/home-content.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { OffersComponent } from './offers/offers.component';
import { DemandsComponent } from './demands/demands.component';
import { OffersSearchBarComponent } from './offers/offers-search-bar/offers-search-bar.component';
import { OffersListComponent } from './offers/offers-list/offers-list.component';
import { OfferDetailComponent } from './offers/offer-detail/offer-detail.component';
import { AuthGuard } from './services/guard/auth-guard.service';
import { UserInfoComponent } from './my-profile/user-info/user-info.component';
import { UserUpdateComponent } from './my-profile/user-update/user-update.component';
import { MyOffersComponent } from './my-profile/my-offers/my-offers.component';
import { MyDemandsComponent } from './my-profile/my-demands/my-demands.component';
import { CreateOfferComponent } from './offers/create-offer/create-offer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CarouselComponent,
    HomeContentComponent,
    SigninComponent,
    SignupComponent,
    MyProfileComponent,
    OffersComponent,
    DemandsComponent,
    OffersSearchBarComponent,
    OffersListComponent,
    OfferDetailComponent,
    UserInfoComponent,
    UserUpdateComponent,
    MyOffersComponent,
    MyDemandsComponent,
    CreateOfferComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBCiAqWQ0twwVTDVXAX7MZeICXCLIrFji0'
    }),
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
