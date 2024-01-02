import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JobOffer } from '../../Models/Interfaces/JobOffer';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JobOfferService {

  constructor(private http: HttpClient) { }

  private endPoint = 'http://localhost:8080/api/offers';

  getAllOffers(): Observable<JobOffer[]>{
    return this.http.get<JobOffer[]>(this.endPoint);
  }

  getOfferByTitle(title: string): Observable<JobOffer[]>{
    const singleOfferEndPoint = `${this.endPoint}/${title}`;
    return this.http.get<JobOffer[]>(singleOfferEndPoint);
  }
}
