import { Component, OnInit } from '@angular/core';
import { AuthToken } from '../../../model/AuthToken';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../service/auth/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  currentUser: AuthToken;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void {
  }

  logout() {

    // https://stackoverflow.com/questions/48853678/what-happens-if-we-does-not-subscribe-to-httpclient-request-which-return-observa
    this.authenticationService.logout().subscribe();

    this.router.navigate(['/']).then(() => {
      return true;
    });
  }
}