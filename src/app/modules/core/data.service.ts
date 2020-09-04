import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { AuthService } from './auth.service';

interface Diagnose {
  id: string;
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  protected readonly USERS_COLLECTION = 'users';
  protected readonly DIAGNOSES_COLLECTION = 'diagnoses';
  public isLoading$ = new BehaviorSubject<boolean>(true);

  get timestamp() {
    return new Date().getTime();
  }

  constructor(private afDb: AngularFirestore, private auth: AuthService) {}

  getDiagnosesCollection() {
    return this.afDb.collection(
      this.USERS_COLLECTION +
        '/' +
        this.auth.id +
        '/' +
        this.DIAGNOSES_COLLECTION,
      (ref) => ref.orderBy('updated_at', 'desc')
    );
  }

  addDiagnose(data): Promise<DocumentReference> {
    return this.getDiagnosesCollection().add({
      ...data,
      created_at: this.timestamp,
      updated_at: this.timestamp,
    });
  }

  editDiagnosis(id, data): Promise<void> {
    return this.getDiagnosesCollection()
      .doc(id)
      .update({
        ...data,
        updated_at: this.timestamp,
      });
  }

  deleteDiagnosis(id): Promise<void> {
    console.log('deleteDiagnosis service call');
    return this.getDiagnosesCollection().doc(id).delete();
  }

  getDiagnose(id): Observable<any> {
    return this.getDiagnosesCollection()
      .doc(id)
      .snapshotChanges()
      .pipe(
        map((snapshot) => {
          const data = snapshot.payload.data() as Diagnose;
          const id = snapshot.payload.id;
          return { id, ...data };
        }),
        catchError((e) => throwError(e))
      );
  }

  getDiagnoses(): Observable<any> {
    return this.getDiagnosesCollection()
      .snapshotChanges()
      .pipe(
        map((snapshot) =>
          snapshot.map((a) => {
            // Get document data
            const data = a.payload.doc.data() as Diagnose;
            // Get document id
            const id = a.payload.doc.id;
            // Use spread operator to add the id to the document data
            return { id, ...data };
          })
        ),
        tap((diagnoses) => {
          this.isLoading$.next(false);
        }),
        catchError((e) => throwError(e))
      );
  }
}
