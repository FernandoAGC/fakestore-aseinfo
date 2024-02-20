import { Component, Input } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../interfaces/product.interface';
import { FakeStoreAPIService } from '../../services/fake-store-api.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

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
  @Input() limit: number = 12;

  constructor(private fsApiService: FakeStoreAPIService) {}

  ngOnInit() {
    this.fsApiService.getProducts().subscribe((productsAPI: Product[] ) => {
      this.products = productsAPI;
    });
  }

  //items to be displayed
  getProducts(): Array<Product> {
    return this.products.slice(0, this.limit);
  }

}
