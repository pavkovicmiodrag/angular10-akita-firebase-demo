import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldControl} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class UserModule { }
