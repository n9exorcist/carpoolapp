import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { OfferRideComponent } from 'src/app/offer-ride/offer-ride.component';
import { RideDetailsComponent } from 'src/app/ride-details/ride-details.component';
import { UpdateRideComponent } from 'src/app/update-ride/update-ride.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'offer-ride', component: OfferRideComponent },
  { path: 'offer-ride/:id', component: OfferRideComponent },
  { path: 'ride-details', component: RideDetailsComponent },
  { path: 'update-ride/:id', component: UpdateRideComponent },
  { path: 'update-ride', component: UpdateRideComponent },
  { path: '', redirectTo:'/offer-ride', pathMatch: 'full'}
];

// Routes are nothing, but array of objects

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
