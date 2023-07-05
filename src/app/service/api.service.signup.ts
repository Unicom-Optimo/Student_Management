import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceSignup {

  constructor(private http: HttpClient) { }

  // postUser(data: any) {
  //   return this.http.post<any>("https://localhost:7253/api/UserModels", data)//http://localhost:3000/login
  //     .pipe(map((res: any) => {
  //       return res;
  //     }))}
  // }

}