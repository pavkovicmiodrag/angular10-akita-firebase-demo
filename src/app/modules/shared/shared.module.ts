import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

const SHARED_MODULES = [
  CommonModule,
  // DashboardMaterialModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  FormsModule,
  RouterModule,
];
const SHARED_COMPONENTS = [];
@NgModule({
  imports: [...SHARED_MODULES, MatInputModule],
  declarations: [...SHARED_COMPONENTS],
  exports: [...SHARED_MODULES, ...SHARED_COMPONENTS],
})
export class SharedModule {}
