import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeSingleComponent } from './notice-single.component';

describe('NoticeSingleComponent', () => {
  let component: NoticeSingleComponent;
  let fixture: ComponentFixture<NoticeSingleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoticeSingleComponent]
    });
    fixture = TestBed.createComponent(NoticeSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
