import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScholarshipsRoutingModule } from './scholarships-routing.module';
import { ScholarshipsPageComponent } from './scholarships-page/scholarships-page.component';
import { ScholarshipsComponent } from './scholarships/scholarships.component';
import { ScholarshipSingleComponent } from './scholarship-single/scholarship-single.component';


@NgModule({
  declarations: [
    ScholarshipsPageComponent,
    ScholarshipsComponent,
    ScholarshipSingleComponent
  ],
  imports: [
    CommonModule,
    ScholarshipsRoutingModule
  ]
})
export class ScholarshipsModule { }
