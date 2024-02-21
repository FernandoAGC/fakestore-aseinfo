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
  sortField: string = 'Price';
  order: string = 'ASC';

  constructor(private fsApiService: FakeStoreAPIService, private productService: ProductService) {}

  ngOnInit() {
    this.fsApiService.getProducts().subscribe((productsAPI: Product[] ) => {
      this.products = productsAPI;
    });

    // communication between components: getting values
    this.productService.items$.subscribe(value => {
      this.limit = value;
    });
    this.productService.sortField$.subscribe(value => {
      this.sortField = value;
    });
    this.productService.order$.subscribe(value => {
      this.order = value;
    });
  }

  //items to be displayed
  getProducts(): Array<Product> {
    if (this.sortField == 'Category') {
      if (this.order == 'ASC') {
        this.products.sort((a, b) => (a.category > b.category) ? 1 : -1);
      } else {
        this.products.sort((a, b) => (a.category > b.category) ? -1 : 1);
      }
    } else if (this.sortField == 'Alphabetical order') {
      if (this.order == 'ASC') {
        this.products.sort((a, b) => (a.title > b.title) ? 1 : -1);
      } else {
        this.products.sort((a, b) => (a.title > b.title) ? -1 : 1);
      }
    } else {
      if (this.order == 'ASC') {
        this.products.sort((a, b) => (a.price > b.price) ? 1 : -1);
      } else {
        this.products.sort((a, b) => (a.price > b.price) ? -1 : 1);
      }
    }

    return this.products.slice(0, this.limit);
  }

}
