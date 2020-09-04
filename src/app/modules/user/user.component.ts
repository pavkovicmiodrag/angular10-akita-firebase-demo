import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-user-container',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public errorMessages$ = this.auth.authErrorMessages$;
  public user$ = this.auth.user$;
  public isLoading$ = this.auth.isLoading$;
  public loginForm: FormGroup;
  public hide = true;
  isSubmitted  =  false;

  constructor(private fb: FormBuilder, private auth: AuthService) {}

  ngOnInit() {
    this.createLoginForm();
  }

  get formControls() { return this.loginForm.controls; }

  signIn(){
    // this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    this.auth.loginFirebase(this.loginForm.value);
    // this.router.navigateByUrl('/admin');
  }

  private createLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  public signUp() {
    this.checkFormValidity(() => {
      this.auth.signUpFirebase(this.loginForm.value);
    });
  }

  public login() {
    this.checkFormValidity(() => {
      this.auth.loginFirebase(this.loginForm.value);
    });
  }

  private checkFormValidity(cb) {
    console.log('checkFormValidity', this.loginForm.value)
    if (this.loginForm.valid) {
      cb();
    } else {
      this.errorMessages$.next('Please enter correct Email and Password value');
    }
  }

  public logOut() {
    this.auth
      .logOutFirebase()
      .then(() => {
        this.auth.authErrorMessages$.next(null);
        this.auth.isLoading$.next(false);
        this.auth.user$.next(null);
      })
      .catch(e => {
        console.error(e);
        this.auth.isLoading$.next(false);
        this.auth.authErrorMessages$.next(
          'Something is wrong when signing out!'
        );
      });
  }

  public getErrorMessage(controlName: string, errorName: string): string {
    const control = this.loginForm.get(controlName);
    return control.hasError('required')
      ? 'You must enter a value'
      : control.hasError(errorName)
        ? `Not a valid ${errorName}`
        : '';
  }
}
