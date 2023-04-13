import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarOutComponent } from './calendar-out.component';

describe('CalendarOutComponent', () => {
  let component: CalendarOutComponent;
  let fixture: ComponentFixture<CalendarOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarOutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
