import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';

@NgModule({
  exports: [MaterialModule, FormsModule],
})
export class SharedModule {}
