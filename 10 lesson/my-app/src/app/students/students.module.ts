import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StudentsListComponent, StudentDetailsComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule, FormsModule
  ]
})
export class StudentsModule { }
