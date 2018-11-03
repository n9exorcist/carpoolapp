import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { Ride } from '../ride';

@Component({
  selector: 'app-offer-ride',
  templateUrl: './offer-ride.component.html',
  styleUrls: ['./offer-ride.component.css']
})
export class OfferRideComponent implements OnInit {

  render: boolean = true;
  welcome: string;
  rides: Ride[];
  showallrides: boolean = true;

  constructor(private _rest: RestService) { }

  ngOnInit() {
    this.getRides();
  }

  getRides() {
    this._rest.getRides().subscribe(
      ridez => this.rides = ridez
    )
  }

  toggle() {
    this.showallrides = !this.showallrides;
    console.log("toggled");
  }

}
