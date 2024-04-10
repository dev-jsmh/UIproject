import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModifyClientFormComponent } from './add-modify-client-form.component';

describe('AddModifyClientFormComponent', () => {
  let component: AddModifyClientFormComponent;
  let fixture: ComponentFixture<AddModifyClientFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddModifyClientFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddModifyClientFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
