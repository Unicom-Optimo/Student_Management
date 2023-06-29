import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postStudent(data: any) {
    return this.http.post<any>("https://localhost:7253/api/StudentsModels", data)//http://localhost:3000/studentDetails
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getStudent() {
    return this.http.get<any>("https://localhost:7253/api/StudentsModels")// //http://localhost:3000/studentDetails
      .pipe(map((res: any) => {
        return res;
      }))
  }



  updateStudent(data: any, id: number) {
    return this.http.put<any>("https://localhost:7253/api/StudentsModels/" + id, data)//http://localhost:3000/studentDetails/
      .pipe(map((res: any) => {
        return res;
      }))
  }

  deleteStudent(id: number) {
    return this.http.delete<any>("https://localhost:7253/api/StudentsModels/" + id)//http://localhost:3000/studentDetails/
      .pipe(map((res: any) => {
        return res;
      }))
  }

}