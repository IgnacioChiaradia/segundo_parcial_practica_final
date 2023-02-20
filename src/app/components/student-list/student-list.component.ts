import { Component, OnInit } from '@angular/core';
import { CareerService } from 'src/app/services/career.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  
  studentList: any = [];
  careerList: any = [];

  constructor(private studentService: StudentService, private careerService: CareerService) { }

  ngOnInit(): void {

    this.getStudents();

    this.getCareers();
    //this.studentService.getStudentsService().subscribe((tareas) => (this.studentList = tareas))    
    
  }

  getStudents(){
    this.studentService.getStudentsService().subscribe((response) => {
      
      this.studentList = response;

      this.studentList = this.studentList.filter( student => student.careerId !== null && student.isActive === true);      
    });
  }

  getNameCareerById(careerId: number) {

    let name = ""

    this.careerList.forEach(career => {
      if(career.careerId === careerId){
        name = career.name;
      }
    });
    
    return name;
  }

  getCareers(){
    this.careerService.getCareers().subscribe((response) => {
      this.careerList = response;

      console.log(this.careerList);
      
    })
  }

}
