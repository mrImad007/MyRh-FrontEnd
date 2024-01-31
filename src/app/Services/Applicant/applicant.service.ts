import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Applicant } from '../../Models/Interfaces/Applicants';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {
  private endPoint = 'http://localhost:8080/api/applicant';
  private authEndPoint = 'http://localhost:8080/api/auth';
  constructor(private http: HttpClient) { }

  getAllApplicant() : Observable<Applicant[]> {
    return this.http.get<Applicant[]>(this.endPoint);
  }

  getApplicant(applicantEmail : string ) : Observable<Applicant[]> {
    const url = `${this.endPoint}/${applicantEmail}`;
    return this.http.get<Applicant[]>(url);
  }

  authentication(requestBody : {email : string, password : string}) : Observable<Applicant> {
    const url = `${this.authEndPoint}/login`;
    console.log(requestBody)
    return this.http.post<Applicant>(url, requestBody);
  }
  registerApplicant(requestBody : Applicant) : Observable<Applicant> {
    const url = `${this.endPoint}/register`;
    return this.http.post<Applicant>(url, requestBody);
  }
}

