import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticePageComponent } from './notice-page.component';

describe('NoticePageComponent', () => {
  let component: NoticePageComponent;
  let fixture: ComponentFixture<NoticePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoticePageComponent]
    });
    fixture = TestBed.createComponent(NoticePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
