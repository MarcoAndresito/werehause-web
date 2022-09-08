import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/core/services/product/product.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss'],
})
export class FormProductComponent implements OnInit {
  id: string | null = null;
  name: string = '';
  price: number | null = null;
  stock?: number = undefined;
  isLoad: boolean = false;
  title: string = '';

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.title = 'Editar';
      this.getProduct();
    } else {
      this.title = 'Nuevo';
    }
  }

  save() {
    this.isLoad = true;
    if (this.id) {
      this.editProduct();
    } else {
      this.newProduct();
    }
  }

  private newProduct() {
    this.productService
      .save({
        name: this.name,
        price: this.price,
        stock: this.stock,
      })
      .subscribe({
        complete: () => {
          this.router.navigate(['/productos']);
        },
      });
  }

  private getProduct() {
    this.isLoad = true;
    this.productService.getOne(this.id).subscribe({
      next: (value: any) => {
        this.name = value.name;
        this.price = value.price;
        this.stock = value.stock;
      },
      complete: () => {
        this.isLoad = false;
      },
    });
  }

  private editProduct() {
    this.productService
      .edit(this.id, {
        name: this.name,
        price: this.price,
        stock: this.stock,
      })
      .subscribe({
        complete: () => {
          this.router.navigate(['/productos']);
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
