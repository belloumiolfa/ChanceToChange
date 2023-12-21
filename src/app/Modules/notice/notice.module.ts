import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticeRoutingModule } from './notice-routing.module';
import { NoticePageComponent } from './notice-page/notice-page.component';
import { NoticesComponent } from './notices/notices.component';
import { NoticeSingleComponent } from './notice-single/notice-single.component';


@NgModule({
  declarations: [
    NoticePageComponent,
    NoticesComponent,
    NoticeSingleComponent
  ],
  imports: [
    CommonModule,
    NoticeRoutingModule
  ]
})
export class NoticeModule { }
