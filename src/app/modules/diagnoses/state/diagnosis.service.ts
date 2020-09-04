import { Injectable } from '@angular/core';
import { DiagnosisStore, DiagnosisState } from './diagnosis.store';

import { CollectionService, CollectionConfig } from 'akita-ng-fire';

@Injectable({ providedIn: 'root' })
@CollectionConfig({ path: 'diagnosis' })
export class DiagnosisService extends CollectionService<DiagnosisState> {
  constructor(protected store: DiagnosisStore) {
    super(store);
  }
}
