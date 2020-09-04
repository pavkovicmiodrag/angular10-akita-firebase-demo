import { ID, guid } from '@datorama/akita';

export interface Diagnosis {
  id: ID;
  name: string;
  description: string;
}

/**
 * A factory function that creates Diagnosis.
 */
export function createDiagnosis(params: Partial<Diagnosis>) {
  return {
    name: params.name,
    description: params.description,
  } as Diagnosis;
}
