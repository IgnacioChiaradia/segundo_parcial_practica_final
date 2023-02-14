import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score-list',
  templateUrl: './score-list.component.html',
  styleUrls: ['./score-list.component.css']
})
export class ScoreListComponent implements OnInit {

  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
    
    //intentando tomar info de un archivo local
    /*this.httpClient.get("../assets/studentList.json").subscribe(data =>{
      console.log(data);      
      console.log("probandooo");      
    })*/


  }

}
