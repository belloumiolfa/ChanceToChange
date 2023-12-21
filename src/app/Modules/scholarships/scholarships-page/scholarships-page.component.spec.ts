import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarshipsPageComponent } from './scholarships-page.component';

describe('ScholarshipsPageComponent', () => {
  let component: ScholarshipsPageComponent;
  let fixture: ComponentFixture<ScholarshipsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScholarshipsPageComponent]
    });
    fixture = TestBed.createComponent(ScholarshipsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
