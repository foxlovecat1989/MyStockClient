import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthRouteGuardService {

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(!this.authService.isAuthenticated)
      this.router.navigate(['login'], {queryParams: {requested: state.url}});

    return this.authService.isAuthenticated;
  }
}
