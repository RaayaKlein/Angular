import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import Student from './Student';
import { STUDENTS } from './dummy-data-students'

@Injectable({
  // Allow the class StudentService to have only 1 instance
  providedIn: 'root'
})

export class StudentService {

  constructor() { }

  getStudents(): Observable<Student[]>{
    // of - will convert a value to be an observable. 
    return of(STUDENTS);
  }


  // a function to get student id, and return its data: {id: , name: }
  getStudent(id: number | string){
    return this.getStudents().pipe(map((student:Student[]) => student.find(s => s.id == id)))
  }

}
