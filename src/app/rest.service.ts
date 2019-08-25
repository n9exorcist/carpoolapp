import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Ride } from './ride';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    // this.ridesURL = 'http://localhost:4000/api/events';
    this.ridesURL = ' http://localhost:3000/posts';
    this.postesURL = 'http://localhost:4000/api/register';
   }

  private ridesURL;
  private postesURL;

  rides: Ride[];
  id: number;

  getRides(): Observable<Ride[]> {
    return this.http.get<Ride[]>(this.ridesURL).pipe(
      tap(data => console.log('Data fetched through get():' + JSON.stringify(data)))
    );
  }

  addRide(ride: Ride): Observable<Ride> {
    return this.http.post<Ride>(this.postesURL, ride, httpOptions).pipe(
      tap(data => console.log('Data fetched through post():' + JSON.stringify(data)))
    );
  }

  deleteRide(id: number): Observable<Ride> {
    const url = `${this.ridesURL}/${id}`;
    return this.http.delete<Ride>(url, httpOptions).pipe(
      tap(data => console.log('Data fetched through delete():' + JSON.stringify(data)))
    );
  }

  updateRide(ride: Ride, id: number): Observable<Ride> {
    console.log('ride ser', ride);
    console.log('id ser', id);
    const url = `${this.ridesURL}/${id}`;
    console.log('url ser', url);
    return this.http.put<Ride>(url, ride, httpOptions).pipe(
      tap(data => console.log('Data fetched through put():' + JSON.stringify(data)))
    );
  }

}
