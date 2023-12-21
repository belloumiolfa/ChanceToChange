import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticePageComponent } from './notice-page/notice-page.component';

const routes: Routes = [
  {
    path: '',
    component: NoticePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticeRoutingModule {}
