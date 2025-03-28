import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordDashboardComponent } from './record-dashboard.component';

describe('RecordDashboardComponent', () => {
  let component: RecordDashboardComponent;
  let fixture: ComponentFixture<RecordDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecordDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecordDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
