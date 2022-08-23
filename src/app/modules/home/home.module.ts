import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ContacComponent } from './pages/contac/contac.component';

@NgModule({
  declarations: [HomeComponent, ContacComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
