import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerRootPageComponent } from './planner-root-page.component';

describe('PlannerRootPageComponent', () => {
  let component: PlannerRootPageComponent;
  let fixture: ComponentFixture<PlannerRootPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlannerRootPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlannerRootPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
