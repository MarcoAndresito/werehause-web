import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';

const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    loadChildren: () =>
      import('./modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'productos',
    component: AdminLayoutComponent,
    loadChildren: () =>
      import('./modules/product/product.module').then(m => m.ProductModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
