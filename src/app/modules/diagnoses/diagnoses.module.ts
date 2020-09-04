import { NgModule } from '@angular/core';

import { DiagnosesRoutingModule } from './diagnoses-routing.module';
import { DiagnosisListComponent } from './diagnosis-list/diagnosis-list.component';
import { DiagnosisDetailsComponent } from './diagnosis-details/diagnosis-details.component';
import { DiagnosisCardComponent } from './diagnosis-card/diagnosis-card.component';
import { DiagnosisFormComponent } from './diagnosis-form/diagnosis-form.component';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    DiagnosesRoutingModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatIconModule,
    MatButtonModule,
  ],
  declarations: [
    DiagnosisListComponent,
    DiagnosisDetailsComponent,
    DiagnosisCardComponent,
    DiagnosisFormComponent,
  ],
})
export class DiagnosesModule {}
