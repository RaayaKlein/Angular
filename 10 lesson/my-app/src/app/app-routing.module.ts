import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonsListComponent } from './lessons-list/lessons-list.component';

const routes: Routes = [
  {path:'lessons', component: LessonsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
