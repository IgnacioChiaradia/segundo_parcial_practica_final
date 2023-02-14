import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url = "http://localhost:3000/";

  constructor(private httpClient : HttpClient) { }

  getStudentsService(){
    return this.httpClient.get(this.url + "students");
  }

  getStudentById(studentId : number){
    return this.httpClient.get(this.url + "students?studentId=" + studentId);
  }
}
