import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  diagnoses = {$implicit: 'Diagnoses', localSk: 'Dijagnoze'};
  patients = {$implicit: 'Patients', localSk: 'Pacijenti'};
  doctors = {$implicit: 'Doctors', localSk: 'Doktori'};
  threatments = {$implicit: 'Threatments', localSk: 'Tretmani'};
  constructor(private router: Router) {
  }
  ngOnInit(): void {
  }
  redirect() {
    this.router.navigate(['/patients']);
  }

}
