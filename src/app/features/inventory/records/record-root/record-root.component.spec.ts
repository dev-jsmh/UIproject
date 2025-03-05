import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordRootComponent } from './record-root.component';

describe('RecordRootComponent', () => {
  let component: RecordRootComponent;
  let fixture: ComponentFixture<RecordRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecordRootComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecordRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
