import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { Ride } from '../ride';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offer-ride',
  templateUrl: './offer-ride.component.html',
  styleUrls: ['./offer-ride.component.css']
})
export class OfferRideComponent implements OnInit {

  welcome: string;
  rides: Ride[];
  id: any;
  // rides is the variable whcih will be binded in the html file.
  isButtonVisible = true;

  constructor(private _rest: RestService, private _route: ActivatedRoute  ) {
    console.log(this._route.snapshot.params);
  }

  ngOnInit() {
    this.getRides();

    this._route.paramMap.subscribe(params => {
      console.log(params.get('this.rides'));
      this.id = parseInt(params.get('id'));
      // this.id = params.get('this.ride.id');
      console.log('this.id', this.id);
    });

    this._rest.getRides().subscribe(res => {
      this.rides = res;
      // console.log("this.rides", this.rides.forEach(this.rides as Ride));
        for (let i = 0; i < this.rides.length; i++) {
          console.log('this.rides.length', this.rides.length);
          if ((this.rides[i]).id  === this.id) {
            this.rides.find['i'] = this.rides[i];
          }
        }
    });
  }

  getRides() {
    this._rest.getRides().subscribe(
      res => this.rides = res
      // rides variable will be used for subscribing the values which we return as an Obervable from rest service
    );
  }

  deleteRow(id) {
    this._rest.deleteRide(id).subscribe(
      res => this.getRides()
    );
  }

  updateRow(rides: any, id) {
    console.log('rides', rides);
    console.log('id', id);
    this._rest.updateRide(rides, id).subscribe(
      res => rides  = res
    );
  }

}
