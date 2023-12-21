import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRoutingModule } from './teachers-routing.module';
import { TeachersPageComponent } from './teachers-page/teachers-page.component';
import { TeachersComponent } from './teachers/teachers.component';
import { TeachersSingleComponent } from './teachers-single/teachers-single.component';


@NgModule({
  declarations: [
    TeachersPageComponent,
    TeachersComponent,
    TeachersSingleComponent
  ],
  imports: [
    CommonModule,
    TeachersRoutingModule
  ]
})
export class TeachersModule { }
