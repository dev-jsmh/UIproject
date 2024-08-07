import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsRootPageComponent } from './appointments-root-page.component';

describe('AppointmentsRootPageComponent', () => {
  let component: AppointmentsRootPageComponent;
  let fixture: ComponentFixture<AppointmentsRootPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentsRootPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppointmentsRootPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
