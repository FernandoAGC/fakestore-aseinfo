import { Component, Inject, Input } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button'
import { Product } from '../../interfaces/product.interface';
import {MatChipsModule} from '@angular/material/chips';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatChipsModule],
  templateUrl: './product-dialog.component.html',
  styleUrl: './product-dialog.component.css'
})
export class ProductDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public product: Product, private cartService: CartService) {}

  addToCart() {
    this.cartService.addItems(1);
  }

}
