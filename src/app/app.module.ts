import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { OfferRideComponent } from './offer-ride/offer-ride.component';
import { RideDetailsComponent } from './ride-details/ride-details.component';
import { UpdateRideComponent } from './update-ride/update-ride.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OfferRideComponent,
    RideDetailsComponent,
    UpdateRideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
