import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../../Models/Interfaces/Company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private endPoint =  'http://localhost:8080/api/companies';
  

  constructor(private http: HttpClient) { }

  getAllCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.endPoint);
  }

  getCompany(companyName: string): Observable<Company[]> {
    const url = `${this.endPoint}/${companyName}`;
    return this.http.get<Company[]>(url);
  }
  
  addNewCompany(newCompany: Company): Observable<Company> {
    return this.http.post<Company>(this.endPoint, newCompany);
  }

  authentication(requestBody: {email: string, password: string}): Observable<Company>{
    console.log(requestBody);
    const url = `${this.endPoint}/auth`;
    return this.http.post<Company>(url, requestBody);
  }
}
