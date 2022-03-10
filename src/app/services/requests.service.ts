import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from '../models/Request';

const baseUrl = 'http://localhost:4040/api';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) { }

  getManagerRequests(): Observable<Request[]> {
    return this.http.get<Request[]>(`${baseUrl}/manager/requests`);
  }

  getManagerPending(): Observable<Request[]> {
    return this.http.get<Request[]>(`${baseUrl}/manager/requests/pending`);
  }

  getManagerResolved(): Observable<Request[]> {
    return this.http.get<Request[]>(`${baseUrl}/manager/requests/resolved`);
  }

  getRequestById(requestId: number): Observable<Request> {
    return this.http.get<Request>(`${baseUrl}/manager/request/${requestId}`);
  }

  getAssociateRequests(employeeId: number): Observable<Request[]> {
    return this.http.get<Request[]>(`${baseUrl}/associate/requests/${employeeId}`);
  }

  getAssociatePending(employeeId: number): Observable<Request[]> {
    return this.http.get<Request[]>(`${baseUrl}/associate/requests/pending/${employeeId}`);
  }

  getAssociateResolved(employeeId: number): Observable<Request[]> {
    return this.http.get<Request[]>(`${baseUrl}/associate/requests/resolved/${employeeId}`);
  }


  addRequest(requestModel: Request): Observable<Request> {
    return this.http.post<Request>(`${baseUrl}/associate/requests/add`, requestModel);
  }

  
  // updateRequest(request: Request): Observable<Request> {
  //   return this.http.put<Request>(`${baseUrl}/manager/`)
  // }

}
