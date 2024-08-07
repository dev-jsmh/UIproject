import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsInProgressRootComponent } from './clients-in-progress-root.component';

describe('ClientsInProgressRootComponent', () => {
  let component: ClientsInProgressRootComponent;
  let fixture: ComponentFixture<ClientsInProgressRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientsInProgressRootComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientsInProgressRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
