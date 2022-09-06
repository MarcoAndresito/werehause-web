import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss'],
})
export class ListProductComponent implements OnInit {
  products: any[] = [];
  displayedColumns: string[] = ['name', 'price', 'stock'];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe({
      next: (value: any) => {
        this.products = value;
      },
      complete: () => {},
      error: err => {},
    });
  }
}
