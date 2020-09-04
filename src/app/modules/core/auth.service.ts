import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { tap, map, share } from 'rxjs/operators';
import * as firebase from 'firebase/app';

interface User {
  uid: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public authErrorMessages$ = new BehaviorSubject<string>(null);
  public isLoading$ = new BehaviorSubject<boolean>(true);
  public user$ = new BehaviorSubject<User>(null);

  private authState = null;

  constructor(private afAuth: AngularFireAuth) {
    this.isLoggedIn().subscribe(user => (this.authState = user));
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  get id(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  private isLoggedIn(): Observable<User | null> {
    return this.afAuth.authState.pipe(
      map(user => {
        console.log('user ', user);
        if (user) {
          const { email, uid } = user;
          this.user$.next({ email, uid });
          return { email, uid };
        }
        return null;
      }),
      tap(() => this.isLoading$.next(false))
    );
  }

  public async getCurrentUserUid(): Promise<string> {
    return (await (this.afAuth.currentUser)).uid;
  }

  public signUpFirebase({ email, password }) {
    this.isLoading$.next(true);
    this.handleErrorOrSuccess(() => {
      return this.afAuth.createUserWithEmailAndPassword(email, password);
    });
  }

  public loginFirebase({ email, password }) {
    this.isLoading$.next(true);
    console.log('loginFirebase', email, password);

    this.handleErrorOrSuccess(() => {
      console.log('handleErrorOrSuccess')
      return this.afAuth.signInWithEmailAndPassword(email, password);
    });
  }

  public logOutFirebase() {
    this.isLoading$.next(true);
    return this.afAuth.signOut();
  }

  private handleErrorOrSuccess(
    cb: () => Promise<firebase.auth.UserCredential>
  ) {
    cb()
      .then(data => this.authenticateUser(data))
      .catch(e => this.handleSignUpLoginError(e));
  }

  private authenticateUser(UserCredential) {
    const {
      user: { email, uid }
    } = UserCredential;

    this.isLoading$.next(false);
  }

  private handleSignUpLoginError(error: { code: string; message: string }) {
    this.isLoading$.next(false);
    const errorMessage = error.message;
    this.authErrorMessages$.next(errorMessage);
  }
}
