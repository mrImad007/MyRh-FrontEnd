import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../../Models/Company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  private endPoint =  "http://localhost:8080/api/company";

  getAllCompanies(): Observable<Company>{
    return this.http.get<Company>(this.endPoint);
  }
}
