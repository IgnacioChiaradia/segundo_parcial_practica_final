import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url = "http://localhost:3000/students";

  constructor(private httpClient : HttpClient) { }

  getStudentsService(){
    return this.httpClient.get(this.url);
  }

  getStudentById(studentId : number){
    return this.httpClient.get(this.url + "?studentId=" + studentId);
  }

  getStudentByEmail(email : string){
    return this.httpClient.get(this.url + "?email=" + email);
  }
}
