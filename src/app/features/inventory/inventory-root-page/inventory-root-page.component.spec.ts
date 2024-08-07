import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryRootPageComponent } from './inventory-root-page.component';

describe('InventoryRootPageComponent', () => {
  let component: InventoryRootPageComponent;
  let fixture: ComponentFixture<InventoryRootPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryRootPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InventoryRootPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
