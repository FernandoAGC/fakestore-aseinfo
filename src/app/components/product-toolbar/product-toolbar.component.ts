import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-product-toolbar',
  standalone: true,
  imports: [MatSliderModule, MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSliderModule,],
  templateUrl: './product-toolbar.component.html',
  styleUrl: './product-toolbar.component.css'
})
export class ProductToolbarComponent {

  items: number = 12;

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }

}
