import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
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
  imports: [CommonModule, ProductRoutingModule, SharedModule],
})
export class ProductModule {}
