import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  message = '';
  name!: string;
  password!: string;
  subscriptionOfAuthResult!: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
      this.loadingAuthResultEvent();
      // this.authService.checkIfAlreadyAuthenticated();
    }

    ngOnDestroy(): void {
    this.subscriptionOfAuthResult.unsubscribe();
  }

  private loadingAuthResultEvent() {
    this.subscriptionOfAuthResult = this.authService.authenticationResultEvent.subscribe(
      reuslt => {
        if (reuslt) {
          // navigation
          const url = this.activatedRoute.snapshot.queryParams['requested'];
          this.router.navigateByUrl(url);
        } else {
          this.message = 'Your name or password was not recognized, please try again...';
        }
      }
    );
  }

  onSubmit(){
    this.authService.authenticate(this.name, this.password);
  }
}
