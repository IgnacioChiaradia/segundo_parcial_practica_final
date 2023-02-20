import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  url = "http://localhost:3000/subjects";

  constructor(private httpClient: HttpClient) { }

  getSubjectsService(){
    return this.httpClient.get(this.url);
  }
}
