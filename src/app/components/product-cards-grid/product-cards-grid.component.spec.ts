import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardsGridComponent } from './product-cards-grid.component';

describe('ProductCardsGridComponent', () => {
  let component: ProductCardsGridComponent;
  let fixture: ComponentFixture<ProductCardsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardsGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductCardsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
