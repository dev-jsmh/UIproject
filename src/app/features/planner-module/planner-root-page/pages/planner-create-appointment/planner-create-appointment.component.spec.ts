import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerCreateAppointmentComponent } from './planner-create-appointment.component';

describe('PlannerCreateAppointmentComponent', () => {
  let component: PlannerCreateAppointmentComponent;
  let fixture: ComponentFixture<PlannerCreateAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlannerCreateAppointmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlannerCreateAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
