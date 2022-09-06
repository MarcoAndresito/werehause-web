import { Component } from '@angular/core';
import { ProductService } from 'src/app/core/services/product/product.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss'],
})
export class FormProductComponent {
  name: string = '';
  price: number | null = null;
  stock?: number = undefined;
  isLoad: boolean = false;

  constructor(private productService: ProductService) {}

  save() {
    this.isLoad = true;
    this.productService
      .save({
        name: this.name,
        price: this.price,
        stock: this.stock,
      })
      .subscribe({
        next: value => {
          console.log('Valor: ', value);
        },
        complete: () => {
          this.isLoad = false;
          this.clear();
        },
        error: err => {
          console.log('Error: ', err);
        },
      });
  }

  clear() {
    this.name = '';
    this.price = null;
    this.stock = undefined;
    this.isLoad = false;
  }
}
