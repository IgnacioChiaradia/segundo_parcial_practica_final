import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score-add',
  templateUrl: './score-add.component.html',
  styleUrls: ['./score-add.component.css']
})
export class ScoreAddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //let studentId = Number(this.route.snapshot.paramMap.get('id'));

    console.log("student");
    

  }

}
