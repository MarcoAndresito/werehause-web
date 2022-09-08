import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { ConfirmDialogComponent } from './component/confirm-dialog/confirm-dialog.component';

@NgModule({
  imports: [MaterialModule],
  exports: [MaterialModule, FormsModule],
  declarations: [ConfirmDialogComponent],
})
export class SharedModule {}
