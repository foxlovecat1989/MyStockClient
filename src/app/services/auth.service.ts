import { EventEmitter, Injectable } from '@angular/core';
import { UserService } from './user-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated = false;
  authenticationResultEvent = new EventEmitter<boolean>();
  jwtToken!: string;

  constructor(
    private userService: UserService
  ) { }

  authenticate(name: string, password: string): boolean{
    this.userService.validateUser(name, password).subscribe(
      next => {
        this.jwtToken = next.result;
        console.log(this.jwtToken);
        this.isAuthenticated = true;
        this.authenticationResultEvent.emit(this.isAuthenticated);
      },
      error => {
        this.isAuthenticated = false;
        this.authenticationResultEvent.emit(this.isAuthenticated);
      }
    );

    return this.isAuthenticated;
  }

  getRole(): string | null{
    if(this.jwtToken == null)
      return null;

     const encodedPayload = this.jwtToken.split('.')[1];
     const payload = atob(encodedPayload);

    return JSON.parse(payload).role;
  }


}
