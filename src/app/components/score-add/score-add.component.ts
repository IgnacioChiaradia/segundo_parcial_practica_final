import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';
import { SubjectService } from 'src/app/services/subject.service';
import { Score } from 'src/app/models/score';
import { ScoreService } from 'src/app/services/score.service';
import { CustomValidatorsService } from 'src/app/common/custom-validators.service';

@Component({
  selector: 'app-score-add',
  templateUrl: './score-add.component.html',
  styleUrls: ['./score-add.component.css']
})
export class ScoreAddComponent implements OnInit {

  studentId: number;
  subjectList: any = [];

  scoreForm: FormGroup;
  message: string;

  constructor(private route:ActivatedRoute, private studentService: StudentService, private subjectService : SubjectService, private scoreService: ScoreService, private customValidator : CustomValidatorsService)  { }

  ngOnInit(): void {

    this.studentId = Number(this.route.snapshot.paramMap.get('id'));

    console.log("student ", this.studentId);

    this.getAllSubjects();
    
    this.scoreForm = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email], [this.customValidator.emailValidatorChar(this.studentService)]),
      subject: new FormControl('', [Validators.required]),
      score: new FormControl('', [Validators.required, Validators.min(1), Validators.max(10)])  
    })
  }

  get email() { return this.scoreForm.get('email'); }

  onSubmit() : void{

    let score = new Score(this.scoreForm.get('email').value,
                         this.scoreForm.get('subject').value,
                         this.scoreForm.get('score').value);    
    
    console.log("se armo el score ?" + score.email);
    console.log("se armo el score ?" + score.subjectId);
    console.log("se armo el score ?" + score.scoreNumber);

    this.addScore(score);    
  }

  getAllSubjects(){
    this.subjectService.getSubjectsService().subscribe((response) => {
      this.subjectList = response;
    });    
  }

  addScore(score: Score){

    this.scoreService.add(score).subscribe(response  => {
      this.message = "score successfully added";
    }, 
    error => {
      this.message = "hubo un error en la carga del score";
    })
    
  }


}
