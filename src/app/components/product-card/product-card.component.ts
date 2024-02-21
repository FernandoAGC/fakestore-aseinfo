import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Product } from '../../interfaces/product.interface';
import { MatDialog } from '@angular/material/dialog';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, ProductDialogComponent, MatIconModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() product!: Product;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ProductDialogComponent, {
      data: this.product
    });
  }

}
