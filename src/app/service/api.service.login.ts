import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ApiServiceLogin {

  constructor(private http: HttpClient) { }
/*
  postLogin(data: any) {
    return this.http.post<any>("http://localhost:3000/login", data)
      .pipe(map((res: any) => {
        return res;
      }))}
  }
*/
}