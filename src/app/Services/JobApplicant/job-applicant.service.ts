import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobApplicants } from '../../Models/Interfaces/JobApplicants';

@Injectable({
  providedIn: 'root'
})
export class JobApplicantService {

  constructor(private http: HttpClient) { }

  private endPoint = 'http://localhost:8080/api/applications'

  getApplication(applicant_id: number, jobOffer_id: number): Observable<JobApplicants>{
    const applicationndPoint = `${this.endPoint}?applicant_id=${applicant_id}&jobOffer_id=${jobOffer_id}`;
    return this.http.get<JobApplicants>(applicationndPoint);
  }

  createApplication(requestBody: {applicant_id: number, jobOffer_id: number}): Observable<JobApplicants>{
    return this.http.post<JobApplicants>(this.endPoint, requestBody);
  }
}
