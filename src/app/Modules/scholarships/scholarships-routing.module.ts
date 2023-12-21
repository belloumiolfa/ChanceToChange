import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScholarshipsPageComponent } from './scholarships-page/scholarships-page.component';

const routes: Routes = [
  {
    path: '',
    component: ScholarshipsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScholarshipsRoutingModule {}
