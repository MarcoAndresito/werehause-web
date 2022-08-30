import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [],
  exports: [MaterialModule, HttpClientModule, FormsModule],
})
export class SharedModule {}
