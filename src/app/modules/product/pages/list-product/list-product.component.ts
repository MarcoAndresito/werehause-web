import { Component } from '@angular/core';
import { ProductService } from 'src/app/core/services/product/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss'],
})
export class ListProductComponent {
  products: any[] = [];

  constructor(private productService: ProductService) {}

  mostrarProductos() {
    this.productService.getAll().subscribe({
      next: (value: any) => {
        this.products = value;
      },
      complete: () => {},
      error: err => {},
    });
  }
}
