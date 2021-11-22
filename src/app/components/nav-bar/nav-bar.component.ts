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
    this.route.navigate(['admins', 'admin', 'stocks']);
  }

  navigateUserStocks(){
    this.route.navigate(['users', 'stocks']);
  }

  navigateAdminClassifies(){
    this.route.navigate(['admins', 'admin', 'classifies']);

  }
  navigateToHome(){
    this.route.navigate(['']);
  }
}
