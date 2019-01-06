import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { OfferRideComponent } from './offer-ride/offer-ride.component';
import { RideDetailsComponent } from './ride-details/ride-details.component';
import { UpdateRideComponent } from './update-ride/update-ride.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login.service';

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
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
