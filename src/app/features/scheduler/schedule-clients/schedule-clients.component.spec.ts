import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleClientsComponent } from './schedule-clients.component';

describe('ScheduleClientsComponent', () => {
  let component: ScheduleClientsComponent;
  let fixture: ComponentFixture<ScheduleClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduleClientsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScheduleClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
