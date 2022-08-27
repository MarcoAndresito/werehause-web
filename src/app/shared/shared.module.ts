import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [],
  exports: [MaterialModule, HttpClientModule],
})
export class SharedModule {}
