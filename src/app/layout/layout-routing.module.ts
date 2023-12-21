import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ContactComponent } from '../components/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../Modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('../Modules/about/about.module').then((m) => m.AboutModule),
      },
      {
        path: 'courses',
        loadChildren: () =>
          import('../Modules/courses/courses.module').then(
            (m) => m.CoursesModule
          ),
      },
      {
        path: 'events',
        loadChildren: () =>
          import('../Modules/events/events.module').then((m) => m.EventsModule),
      },
      {
        path: 'blog',
        loadChildren: () =>
          import('../Modules/blog/blog.module').then((m) => m.BlogModule),
      },
      {
        path: 'notice',
        loadChildren: () =>
          import('../Modules/notice/notice.module').then((m) => m.NoticeModule),
      },
      {
        path: 'scholarships',
        loadChildren: () =>
          import('../Modules/scholarships/scholarships.module').then(
            (m) => m.ScholarshipsModule
          ),
      },
      {
        path: 'teachers',
        loadChildren: () =>
          import('../Modules/teachers/teachers.module').then(
            (m) => m.TeachersModule
          ),
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
