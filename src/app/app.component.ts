import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ProductCardsGridComponent } from './components/product-cards-grid/product-cards-grid.component';
import { ProductToolbarComponent } from './components/product-toolbar/product-toolbar.component';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ToolbarComponent, ProductCardsGridComponent, ProductToolbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent {
  title = 'fakestore-aseinfo';
}
