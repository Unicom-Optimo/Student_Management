import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ApiService2 {

  constructor(private http: HttpClient) { }

  postCourse(data: any) {
    return this.http.post<any>("https://localhost:7253/api/CourseModules", data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getCourse() {
    return this.http.get<any>("https://localhost:7253/api/CourseModules")
      .pipe(map((res: any) => {
        return res;
      }))
  }


  updateCourse(data: any, id: number) {
    return this.http.put<any>("https://localhost:7253/api/CourseModules/" + id, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  deleteCourse(id: number) {
    return this.http.delete<any>("https://localhost:7253/api/CourseModules/" + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }

}