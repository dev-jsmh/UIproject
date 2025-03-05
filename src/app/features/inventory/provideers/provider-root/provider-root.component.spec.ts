import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderRootComponent } from './provider-root.component';

describe('ProviderRootComponent', () => {
  let component: ProviderRootComponent;
  let fixture: ComponentFixture<ProviderRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProviderRootComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProviderRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
