import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSingleComponent } from './event-single.component';

describe('EventSingleComponent', () => {
  let component: EventSingleComponent;
  let fixture: ComponentFixture<EventSingleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventSingleComponent]
    });
    fixture = TestBed.createComponent(EventSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
