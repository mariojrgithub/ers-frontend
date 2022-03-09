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

  getRequests(): Observable<Request[]> {
    return this.http.get<Request[]>(`${baseUrl}/requests`);
  }

  getPending(): Observable<Request[]> {
    return this.http.get<Request[]>(`${baseUrl}/requests/pending`);
  }

  getResolved(): Observable<Request[]> {
    return this.http.get<Request[]>(`${baseUrl}/requests/resolved`)
  }


}
