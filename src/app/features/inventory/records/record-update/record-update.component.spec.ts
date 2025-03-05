import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordUpdateComponent } from './record-update.component';

describe('RecordUpdateComponent', () => {
  let component: RecordUpdateComponent;
  let fixture: ComponentFixture<RecordUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecordUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecordUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
