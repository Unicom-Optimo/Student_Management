import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AuthguardServiceService {

  //private baseUrl:string="https://localhost:7253/api/"
  constructor(private http: HttpClient) { }

  signUp(userObj: any) {
    return this.http.post<any>
      ('https://localhost:7253/api/UserModels', userObj); //https://localhost:7253/api/UserModels

  }


  login(loginObj: any) {
    return this.http.post
      ('https://localhost:7253/api/UserModels/authenticate', loginObj); //https://localhost:7253/api/UserModels/authenticate
  }


}


