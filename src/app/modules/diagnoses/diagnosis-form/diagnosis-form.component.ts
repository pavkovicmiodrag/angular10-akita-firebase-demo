import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-diagnosis-form',
  templateUrl: './diagnosis-form.component.html',
  styleUrls: ['./diagnosis-form.component.scss'],
})
export class DiagnosisFormComponent implements OnInit {
  diagnoseForm: FormGroup;

  @Input()
  diagnosis;

  @Output()
  saveDiagnosis = new EventEmitter();

  @Output()
  sendError = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();

    if (this.diagnosis) {
      this.diagnoseForm.patchValue(this.diagnosis);
    }
  }

  createForm() {
    this.diagnoseForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  addDiagnosis() {
    if (this.diagnoseForm.valid) {
      this.saveDiagnosis.emit(this.diagnoseForm.value);
    } else {
      this.sendError.emit('please fill all fields');
    }
  }
}
