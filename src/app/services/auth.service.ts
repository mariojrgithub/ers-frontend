import { Injectable } from '@angular/core';
import { Employee } from '../models/Employee';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn: boolean = false;

  constructor() { }

  storeEmployee(employee: Employee): void {
    sessionStorage.setItem("userInfo", JSON.stringify(employee));
  }

  retrieveEmployee(): Employee {
    let data: any = sessionStorage.getItem("userInfo");
    return data;
  }

  destroyEmployee(): void {
    sessionStorage.removeItem("userInfo");
  }
}
