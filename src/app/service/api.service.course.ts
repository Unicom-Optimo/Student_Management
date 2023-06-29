import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ApiService2 {

  constructor(private http: HttpClient) { }

  postCourse(data: any) {
    return this.http.post<any>("http://localhost:3000/courseDetails", data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getCourse() {
    return this.http.get<any>("http://localhost:3000/courseDetails")
      .pipe(map((res: any) => {
        return res;
      }))
  }


  updateCourse(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/courseDetails/" + id, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  deleteCourse(id: number) {
    return this.http.delete<any>("http://localhost:3000/courseDetails/" + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }

}