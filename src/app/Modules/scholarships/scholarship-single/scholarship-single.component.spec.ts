import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarshipSingleComponent } from './scholarship-single.component';

describe('ScholarshipSingleComponent', () => {
  let component: ScholarshipSingleComponent;
  let fixture: ComponentFixture<ScholarshipSingleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScholarshipSingleComponent]
    });
    fixture = TestBed.createComponent(ScholarshipSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
