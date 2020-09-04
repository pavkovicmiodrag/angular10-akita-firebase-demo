import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Diagnosis } from '../state/diagnosis.model';

@Component({
  selector: 'app-diagnosis-card',
  templateUrl: './diagnosis-card.component.html',
  styleUrls: ['./diagnosis-card.component.scss'],
})
export class DiagnosisCardComponent implements OnInit {
  @Input()
  diagnosis;

  @Input()
  loading;

  @Output()
  removeDiagnosis = new EventEmitter();

  ngOnInit() {}

  remove(diagnosis: Diagnosis) {
    console.log('remove diagnosis', diagnosis);
    this.removeDiagnosis.emit(diagnosis.id);
  }
}
