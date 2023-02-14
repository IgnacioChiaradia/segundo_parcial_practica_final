import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-score-add',
  templateUrl: './score-add.component.html',
  styleUrls: ['./score-add.component.css']
})
export class ScoreAddComponent implements OnInit {

  studentId: number;

  constructor(private _route:ActivatedRoute) { }

  ngOnInit(): void {

    this.studentId = Number(this._route.snapshot.paramMap.get('id'));

    console.log("student ", this.studentId);
    

  }

}
