import { Injectable } from '@angular/core';
import { Admin } from '../../Models/Interfaces/Admin';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private endPoint = 'http://localhost:8080/api/admins';
  constructor(private http: HttpClient) { }

  authentication(requestBody: {email: string, password: string}) {
    const url = `${this.endPoint}/auth`;
    return this.http.post<Admin>(url, requestBody);
  }
}
