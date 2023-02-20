import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorsService {

  emailExists(studentService: StudentService): AsyncValidatorFn{

    console.log("entra al custom validator");
    
    return (control: AbstractControl): Observable<ValidationErrors|null> => {
          if (control.value == '') {
            return null;
          }else{
            console.log(control.value);
            
            return studentService.getStudentByEmail(control.value).pipe(
              map( (student) => {
              if(student) return ({'inValid':true})
            })
          )            
        }
      }
  }

  emailValidatorChar(studentService : StudentService) : AsyncValidatorFn{
  
    return(control : AbstractControl) : Observable<ValidationErrors> =>{
      console.log(control.value);
      
      return studentService.getStudentByEmail(control.value).pipe(map(student => student))
    }  
    
  }
}

