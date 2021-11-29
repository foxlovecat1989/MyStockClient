import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
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
}
