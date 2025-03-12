import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerClientTableComponent } from './planner-client-table.component';

describe('PlannerClientTableComponent', () => {
  let component: PlannerClientTableComponent;
  let fixture: ComponentFixture<PlannerClientTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlannerClientTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlannerClientTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
