import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../interfaces/product.interface';
import { FakeStoreAPIService } from '../../services/fake-store-api.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-cards-grid',
  standalone: true,
  imports: [ProductCardComponent, HttpClientModule, CommonModule],
  templateUrl: './product-cards-grid.component.html',
  styleUrl: './product-cards-grid.component.css',
  providers: [FakeStoreAPIService]
})
export class ProductCardsGridComponent {

  private products: Array<Product> = [];
  limit: number = 12;

  constructor(private fsApiService: FakeStoreAPIService, private productService: ProductService) {}

  ngOnInit() {
    this.fsApiService.getProducts().subscribe((productsAPI: Product[] ) => {
      this.products = productsAPI;
    });

    // communication between components: getting values
    this.productService.items$.subscribe(value => {
      this.limit = value;
    });
  }

  //items to be displayed
  getProducts(): Array<Product> {
    return this.products.slice(0, this.limit);
  }

}
