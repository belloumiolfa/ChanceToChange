import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersSingleComponent } from './teachers-single.component';

describe('TeachersSingleComponent', () => {
  let component: TeachersSingleComponent;
  let fixture: ComponentFixture<TeachersSingleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeachersSingleComponent]
    });
    fixture = TestBed.createComponent(TeachersSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
