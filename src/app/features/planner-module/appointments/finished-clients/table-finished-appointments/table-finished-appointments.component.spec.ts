import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFinishedAppointmentsComponent } from './table-finished-appointments.component';

describe('TableFinishedAppointmentsComponent', () => {
  let component: TableFinishedAppointmentsComponent;
  let fixture: ComponentFixture<TableFinishedAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableFinishedAppointmentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableFinishedAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
