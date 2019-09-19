import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { OffersComponent } from './offers/offers.component';
import { DemandsComponent } from './demands/demands.component';
import { OfferDetailComponent } from './offers/offer-detail/offer-detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'my-profile', component: MyProfileComponent },
  { path: 'offers/:page', component: OffersComponent },
  { path: 'offers/detail/:id', component: OfferDetailComponent },
  { path: 'demands', component: DemandsComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
