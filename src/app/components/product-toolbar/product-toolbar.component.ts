import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-toolbar',
  standalone: true,
  imports: [MatSliderModule, MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSliderModule, MatSelectModule, CommonModule],
  templateUrl: './product-toolbar.component.html',
  styleUrl: './product-toolbar.component.css'
})
export class ProductToolbarComponent {

  items: number = 12;
  options: Array<string> = ['Price', 'Category', 'Alphabetical order'];
  selectedOption: string = 'Price';
  order: Array<string> = ['ASC', 'DESC']
  selectedOrder: string = 'ASC';

  constructor(private productService: ProductService) {}

  // Communication between components: modifying values
  onItemsChange(value: number) {
    this.productService.setItems(value);
  }

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }

}
