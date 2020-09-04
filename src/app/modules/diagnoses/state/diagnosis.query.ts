import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { DiagnosisStore, DiagnosisState } from './diagnosis.store';
import { Diagnosis } from './diagnosis.model';

@Injectable({
  providedIn: 'root'
})
export class DiagnosisQuery extends QueryEntity<DiagnosisState, Diagnosis> {

  constructor(protected store: DiagnosisStore) {
    super(store);
  }

}
