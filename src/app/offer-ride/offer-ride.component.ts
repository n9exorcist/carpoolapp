import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { Ride } from '../ride';

@Component({
  selector: 'app-offer-ride',
  templateUrl: './offer-ride.component.html',
  styleUrls: ['./offer-ride.component.css']
})
export class OfferRideComponent implements OnInit {

  welcome: string;
  rides: Ride[];
  // rides is the variable whcih will be binded in the html file. 
  isButtonVisible: boolean = true;

  constructor(private _rest: RestService) { }

  ngOnInit() {
    this.getRides();
  }

  getRides() {
    this._rest.getRides().subscribe(
      res => this.rides = res
      //rides variable will be used for subscribing the values which we return as an Obervable from rest service
    )
  }

}
