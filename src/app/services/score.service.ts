import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Score } from '../models/score';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  url = "http://localhost:3000/scores"

  constructor(private httpClient: HttpClient) { }

  add(score: Score): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'Application/json'
      })
    };

    //const headers = { 'content-type': 'application/json'};
    const body = JSON.stringify(score);

    console.log("este es el body", body);
    

    return this.httpClient.post(this.url, body, httpOptions);/*.subscribe(
        response => console.log("ok"),
        error => console.log("error")
    );*/
  }
}
