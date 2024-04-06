import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableScheduleClientsComponent } from './table-schedule-clients.component';

describe('TableScheduleClientsComponent', () => {
  let component: TableScheduleClientsComponent;
  let fixture: ComponentFixture<TableScheduleClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableScheduleClientsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableScheduleClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
