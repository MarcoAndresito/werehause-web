import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from 'src/app/core/services/product/product.service';
import { ConfirmDialogComponent } from 'src/app/shared/component/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss'],
})
export class ListProductComponent implements OnInit {
  products: any[] = [];
  displayedColumns: string[] = ['name', 'price', 'stock', 'actions'];
  isLoad: boolean = false;

  constructor(
    private productService: ProductService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadProduct();
  }

  private loadProduct() {
    this.isLoad = true;
    this.productService.getAll().subscribe({
      next: (value: any) => {
        this.products = value;
      },
      complete: () => {
        this.isLoad = false;
      },
    });
  }

  delete(id: string) {
    this.isLoad = true;
    this.productService.delete(id).subscribe({
      complete: () => {
        this.loadProduct();
      },
    });
  }

  openConfirmDialog(id: string): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: {
        title: 'Seguro de eliminar el producto?',
        subtitle: 'precione el boton "si" para eliminar el producto',
      },
    });

    dialogRef.afterClosed().subscribe({
      next: value => {
        if (value) {
          this.delete(id);
        }
      },
    });
  }
}
