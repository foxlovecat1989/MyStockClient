import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/services/UserService/user-service';

@Component({
  selector: 'admin-manage-user-detail',
  templateUrl: './admin-manage-user-detail.component.html',
  styleUrls: ['./admin-manage-user-detail.component.css']
})
export class AdminManageUserDetailComponent implements OnInit {

  @Input('user')
  user!: User;
  @Output('dataChangeEvent')
  dataChangeEvent = new EventEmitter();

  message = 'Loading Data, please wait...';

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {

  }

  edit(){
    this.router.navigate(['admins', 'users'], {queryParams: {action: 'edit', id: this.user.id}});
  }

  delete(){
    this.message = 'Deleting Data, please wait...';
    this.userService.removeUser(this.user.id).subscribe(
      next => {
        this.dataChangeEvent.emit();
        this.router.navigate(['admins', 'users']);
      },
      error => {
        if(error.status === 500)
          this.message = "This user cannot be deleted...";
        else
          this.message = "Something went wrong, please try again...";
      }
    );
  }

}
