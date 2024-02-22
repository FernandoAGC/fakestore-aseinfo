import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ProductCardsGridComponent } from './components/product-cards-grid/product-cards-grid.component';
import { ProductToolbarComponent } from './components/product-toolbar/product-toolbar.component';
import { ProductService } from './services/product.service';
import { FooterComponent } from './components/footer/footer.component';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ToolbarComponent, ProductCardsGridComponent, ProductToolbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService, CartService]
})
export class AppComponent {
  title = 'fakestore-aseinfo';
}
