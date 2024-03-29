import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosisFormComponent } from './diagnosis-form.component';

describe('diagnosisFormComponent', () => {
  let component: DiagnosisFormComponent;
  let fixture: ComponentFixture<DiagnosisFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosisFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosisFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
