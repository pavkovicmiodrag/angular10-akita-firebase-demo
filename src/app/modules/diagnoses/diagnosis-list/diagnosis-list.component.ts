import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DiagnosisQuery } from '../state/diagnosis.query';
import { DiagnosisService } from '../state/diagnosis.service';
import { Diagnosis, createDiagnosis } from '../state/diagnosis.model';
import { DataService } from '../../core/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackBarService } from '../../core/snack-bar.service';

interface Diagnose {
  key: string;
  title: string;
  description: string;
  date: string;
}

@Component({
  selector: 'app-diagnosis-list',
  templateUrl: './diagnosis-list.component.html',
  styleUrls: ['./diagnosis-list.component.scss'],
})
export class DiagnosisListComponent implements OnInit {
  diagnoses$: Observable<Diagnosis[]>;
  isDbLoading$;

  constructor(
    private diagnosisQuery: DiagnosisQuery,
    private service: DiagnosisService,
    private snackBar: SnackBarService,
    private router: Router
  ) {}

  ngOnInit() {
    // Subscribe to the collection
    this.service.syncCollection().subscribe();
    // Get the list from the store
    this.diagnoses$ = this.diagnosisQuery.selectAll();
    this.isDbLoading$ = this.diagnosisQuery.selectLoading();
  }

  addDiagnosis(diagnosis: Diagnosis) {
    this.service.add(diagnosis);
  }

  editDiagnosis(diagnosis) {
    this.service.update(diagnosis.id, diagnosis);
  }

  removeDiagnosis(id: string) {
    if (confirm('Are you sure?')) {
      this.service
        .remove(id)
        .then(() => {
          this.router.navigate(['/diagnoses']);
          this.snackBar.open(`${id} successfully was deleted`);
        })
        .catch((e) => {
          this.snackBar.open('Unable to delete this diagnose');
        });
    }
  }
}
