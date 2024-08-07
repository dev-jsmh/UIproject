import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedAppointmentRootPageComponent } from './finished-appointment-root-page.component';

describe('FinishedAppointmentRootPageComponent', () => {
  let component: FinishedAppointmentRootPageComponent;
  let fixture: ComponentFixture<FinishedAppointmentRootPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinishedAppointmentRootPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinishedAppointmentRootPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
