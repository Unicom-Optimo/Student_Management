

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthguardServiceService {


  private baseUrl: string = "https://localhost:7253/";

  constructor(
    private http: HttpClient,
    private _router: Router
  ) { }


  signUp(userObj: any) {
    return this.http.post<any>
      ('https://localhost:7253/api/UserModels', userObj); //https://localhost:7253/api/UserModels

  }


  login(loginObj: any) {

    // return this.http.post('https://localhost:7253/api/UserModels/authenticate', loginObj);  //https://localhost:7253/api/UserModels/authenticate

    return this.http.post(this.baseUrl + 'api/UserModels/authenticate', loginObj).pipe(
      map((res: Response) => res),
      catchError((err: Response) => this.onError(err))
    );
  }


  logout() {
    localStorage.removeItem('currentUser');
    this._router.navigate(['login']);
  }

  onError(res: Response) {
    const error = res;
    return throwError(error);
  }



}






// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';



// @Injectable({
//   providedIn: 'root'
// })
// export class AuthguardServiceService {

//   //private baseUrl:string="https://localhost:7253/api/"
//   constructor(private http: HttpClient) { }

//   signUp(userObj: any) {
//     return this.http.post<any>
//       ('https://localhost:7253/api/UserModels', userObj); //https://localhost:7253/api/UserModels

//   }


//   login(loginObj: any) {
//     return this.http.post
//       ('https://localhost:7253/api/UserModels/authenticate', loginObj); //https://localhost:7253/api/UserModels/authenticate
//   }


// }



