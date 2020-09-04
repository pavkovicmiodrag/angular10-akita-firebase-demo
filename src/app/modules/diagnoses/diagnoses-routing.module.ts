import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiagnosisListComponent } from './diagnosis-list/diagnosis-list.component';
import { DiagnosisDetailsComponent } from './diagnosis-details/diagnosis-details.component';

const routes: Routes = [
  {
    path: '',
    component: DiagnosisListComponent,
  },
  {
    path: ':id',
    component: DiagnosisDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiagnosesRoutingModule {}
