import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsRootPageComponent } from './products-root-page.component';

describe('ProductsRootPageComponent', () => {
  let component: ProductsRootPageComponent;
  let fixture: ComponentFixture<ProductsRootPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsRootPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsRootPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
