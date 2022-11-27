import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import Student from '../Student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  students: Observable<Student[]>;
  selectedId:number = 0;

  // we add the service in the constructor!
  constructor(private service: StudentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.students = this.route.paramMap.pipe(
      switchMap((params) => {
        // parseInt - we get all url params as a string - therefore we need to convert to int
        this.selectedId = parseInt(params.get('id'))
        return this.service.getStudents();
      })
    )
  }

}
