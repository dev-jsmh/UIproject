import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSearchFormComponent } from './client-search-form.component';

describe('ClientSearchFormComponent', () => {
  let component: ClientSearchFormComponent;
  let fixture: ComponentFixture<ClientSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientSearchFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
