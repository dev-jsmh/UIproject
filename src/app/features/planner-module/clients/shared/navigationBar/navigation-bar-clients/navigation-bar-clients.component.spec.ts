import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationBarClientsComponent } from './navigation-bar-clients.component';

describe('NavigationBarClientsComponent', () => {
  let component: NavigationBarClientsComponent;
  let fixture: ComponentFixture<NavigationBarClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationBarClientsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigationBarClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
