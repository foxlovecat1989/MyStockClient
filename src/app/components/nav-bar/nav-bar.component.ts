import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isUserLogin = false;
  userIsLoggedIn = false;

  constructor(
    private route: Router,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    if(this.authService.isAuthenticated)
      this.isUserLogin = true;
    this.authService.authenticationResultEvent.subscribe(
      next => this.userIsLoggedIn = next
    );
  }

  navigateAdminStocks(){
    this.route.navigate(['admins', 'stocks']);
  }

  navigateUserStocks(){
    this.route.navigate(['users', 'stocks']);
  }

  navigateAdminClassifies(){
    this.route.navigate(['admins', 'classifies']);
  }

  navigateAdminUsers(){
    this.route.navigate(['admins', 'users']);
  }

  navigateAdminActivities(){
    this.route.navigate(['admins', 'activities']);
  }

  navigateToHome(){
    this.route.navigate(['']);
  }

  logout(){
    this.authService.logout();
    this.navigateToHome();
  }
}
