import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ScoreService } from 'src/app/services/score.service';

@Component({
  selector: 'app-score-list',
  templateUrl: './score-list.component.html',
  styleUrls: ['./score-list.component.css']
})
export class ScoreListComponent implements OnInit {

  constructor(private httpClient : HttpClient, private scoreService : ScoreService) { }

  ngOnInit(): void {
    
    


  }

  getScores(){
    
  }

}
