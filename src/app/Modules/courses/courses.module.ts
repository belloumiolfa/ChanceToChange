import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseSingleComponent } from './course-single/course-single.component';


@NgModule({
  declarations: [
    CoursesPageComponent,
    CoursesComponent,
    CourseSingleComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
