import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ListProductComponent } from './pages/list-product/list-product.component';
import { FormProductComponent } from './pages/form-product/form-product.component';
import { ShowProductComponent } from './pages/show-product/show-product.component';

@NgModule({
  declarations: [
    ListProductComponent,
    FormProductComponent,
    ShowProductComponent,
  ],
  imports: [CommonModule, ProductRoutingModule],
})
export class ProductModule {}
