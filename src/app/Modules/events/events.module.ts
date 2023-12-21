import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventPageComponent } from './event-page/event-page.component';
import { EventsComponent } from './events/events.component';
import { EventSingleComponent } from './event-single/event-single.component';


@NgModule({
  declarations: [
    EventPageComponent,
    EventsComponent,
    EventSingleComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
