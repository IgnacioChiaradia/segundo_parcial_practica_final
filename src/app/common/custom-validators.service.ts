import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorsService {

  // funciona pero si se deja en el segundo parametro o sea con los validators, no en el tercero con los async validators
  /*emailValidatorFakeOk(studentService : StudentService) : AsyncValidatorFn{

    console.log("entra al custom validator");
  
    return(control : AbstractControl) : ValidatorFn | any =>{
      console.log(control.value);
      
      studentService.getStudentByEmail(control.value).subscribe( (student : []) => {
        console.log("student", student, control);
        student.length > 0 ? null : control.setErrors({existStudent: false});
      })
    }  
    
  }*/

  // en proceso, detecta los cambios en el campo y no devuelve ni null ni existStudent
  emailValidatorOk(studentService : StudentService) : AsyncValidatorFn{

    console.log("entra al custom validator");
  
    return(control : AbstractControl) : Observable<ValidationErrors|null> =>{
      console.log(control.value);
      
      return studentService.getStudentByEmail(control.value).pipe(map( (student : []) => {
        
        
        console.log("student", student, control);
        
        return student.length > 0 ? of(null) : of({existStudent : false})
      }))
    }      
  }

  /*validarExistencia(){
    return (form: AbstractControl): ValidatorFn | any => {
      const documento = form.value;
      this.clientes.validarExistencia(documento).subscribe(rta => {
        rta ? form.setErrors({isRegister: true}): null;
      });
    }
  }*/

  //cuartoIntento - no sirve

 /* emailExists4(studentService: StudentService): AsyncValidatorFn{

    console.log("entra al custom validator");
    
    return (control: AbstractControl): Observable<ValidationErrors|null> => {
          if (control.value == '') {
            return null;
          }else{
            console.log(control.value);
            
            return studentService.getStudentByEmail(control.value).subscribe( (response) => {
              return !response ? { 'emailExists': { value: control.value}} : null;
            })
          )            
        }
      }
  }*/

  
}

