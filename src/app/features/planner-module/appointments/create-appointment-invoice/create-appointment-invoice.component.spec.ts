import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAppointmentInvoiceComponent } from './create-appointment-invoice.component';

describe('CreateAppointmentInvoiceComponent', () => {
  let component: CreateAppointmentInvoiceComponent;
  let fixture: ComponentFixture<CreateAppointmentInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAppointmentInvoiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateAppointmentInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
