import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CareerService {

  url = "http://localhost:3000/";

  constructor(private httpClient : HttpClient) { }

  getCareers() {
    return this.httpClient.get(this.url + "career");        
  }


}
