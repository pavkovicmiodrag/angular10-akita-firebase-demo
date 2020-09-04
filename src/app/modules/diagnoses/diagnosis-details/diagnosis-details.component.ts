import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackBarService } from '../../core/snack-bar.service';
import { Subject } from 'rxjs';
import { DiagnosisService } from '../state/diagnosis.service';

@Component({
  selector: 'app-diagnosis-details',
  templateUrl: './diagnosis-details.component.html',
  styleUrls: ['./diagnosis-details.component.scss'],
})
export class DiagnosisDetailsComponent implements OnInit {
  public errorMessages$ = new Subject();
  public diagnosis$;

  private id;

  constructor(
    private data: DiagnosisService,
    private route: ActivatedRoute,
    private snackBar: SnackBarService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.id = id;
    this.diagnosis$ = this.data.getValue(id);
  }

  saveDiagnosis(diagnosis) {
    this.data
      .update(this.id, diagnosis)
      .then(() => {
        this.router.navigate(['/diagnoses']);
        this.snackBar.open(
          'Edit diagnosis ' + diagnosis.name + ' was successfully done'
        );
      })
      .catch((e) => {
        this.router.navigate(['/diagnoses']);
        this.snackBar.open('Unable to edit this diagnose');
      });
  }

  sendError(message) {
    this.errorMessages$.next(message);
  }
}
