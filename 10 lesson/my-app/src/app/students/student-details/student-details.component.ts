import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import Student from '../Student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  // get specific student by id  {id: , name}
  student: Observable<Student>;

  constructor(private service: StudentService, private route: ActivatedRoute
    ,private router: Router ) { }

  ngOnInit(): void {
    this.student = this.route.paramMap.pipe(switchMap((params: ParamMap) => 
    this.service.getStudent(params.get('id'))))
  }


  goBack(){
    this.router.navigate(['/students'])
  }

}
