import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientModifyComponent } from './client-modify.component';

describe('ClientModifyComponent', () => {
  let component: ClientModifyComponent;
  let fixture: ComponentFixture<ClientModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientModifyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
