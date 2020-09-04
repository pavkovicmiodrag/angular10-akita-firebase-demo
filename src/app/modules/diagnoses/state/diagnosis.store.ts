import { Injectable } from '@angular/core';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { CollectionState } from 'akita-ng-fire';
import { Diagnosis } from './diagnosis.model';

export interface DiagnosisState extends CollectionState<Diagnosis> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'diagnosis' })
export class DiagnosisStore extends EntityStore<DiagnosisState> {
  constructor() {
    super();
  }
}
