import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormProductComponent } from './pages/form-product/form-product.component';
import { ListProductComponent } from './pages/list-product/list-product.component';
import { ShowProductComponent } from './pages/show-product/show-product.component';

const routes: Routes = [
  {
    path: '',
    component: ListProductComponent,
  },
  {
    path: 'formulario',
    component: FormProductComponent,
  },
  {
    path: 'mostrar',
    component: ShowProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
