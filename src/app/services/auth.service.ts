import { EventEmitter, Injectable } from '@angular/core';
import { UserService } from './user-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated = false;
  authenticationResultEvent = new EventEmitter<boolean>();
  role!: string;
  roleSetEvent = new EventEmitter<string>();

  constructor(
    private userService: UserService
  ) { }

  authenticate(name: string, password: string): boolean{
    this.userService.validateUser(name, password).subscribe(
      next => {
        this.setupRole();
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

  private setupRole() : void {
    this.userService.getRole().subscribe(
      next => {
        this.role = next.role;
        this.roleSetEvent.emit(next.role);
      }
    );
  }

  logout(){
    this.userService.logout().subscribe();
    this.isAuthenticated = false;
    this.authenticationResultEvent.emit(false);
  }

  checkIfAlreadyAuthenticated(){
    this.userService.getRole().subscribe(
      next => {
        if(next.role !== ''){
          this.role = next.role;
          this.roleSetEvent.emit(next.role);
          this.isAuthenticated = true;
          this.authenticationResultEvent.emit(true);
        }
      }
    );
  }



}
