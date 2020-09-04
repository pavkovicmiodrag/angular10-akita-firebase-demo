import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from './modules/core/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Angular10 demo';
  @ViewChild('sidenav', { static: true }) public sidenav: MatSidenav;

  constructor(private sidenavService: SidenavService) {}
  ngOnInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }

  toggleRightSidenav() {
    this.sidenavService.open();
  }
}
