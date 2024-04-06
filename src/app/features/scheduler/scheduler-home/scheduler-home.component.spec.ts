import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulerHomeComponent } from './scheduler-home.component';

describe('SchedulerHomeComponent', () => {
  let component: SchedulerHomeComponent;
  let fixture: ComponentFixture<SchedulerHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchedulerHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchedulerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
