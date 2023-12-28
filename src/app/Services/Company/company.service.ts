import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../../Models/Interfaces/Company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  private endPoint =  'http://localhost:8080/api/companies';

  getAllCompanies(): Observable<Company>{
    return this.http.get<Company>(this.endPoint);
  }

  getCompany(companyName : string): Observable<Company>{
    const url = `${this.endPoint}/${companyName}`;
    return this.http.get<Company>(url);
  }
  
  addNewCompany(newCompany : Company){
    return this.http.post<Company>(this.endPoint, newCompany).subscribe();
    }
}
