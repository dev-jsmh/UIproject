import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientInProgressTableComponent } from './client-in-progress-table.component';

describe('ClientInProgressTableComponent', () => {
  let component: ClientInProgressTableComponent;
  let fixture: ComponentFixture<ClientInProgressTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientInProgressTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientInProgressTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
