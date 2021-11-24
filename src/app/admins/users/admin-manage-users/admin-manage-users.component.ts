import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/services/UserService/user-service';

@Component({
  selector: 'admin-manage-users',
  templateUrl: './admin-manage-users.component.html',
  styleUrls: ['./admin-manage-users.component.css']
})
export class AdminManageUsersComponent implements OnInit {

  users!: Array<User>;
  message = 'Loading Data, please wait...';
  isLoadingData = true;
  selectedUser!: User;
  action!: string;

  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadingData();
  }



  loadingData() {
    this.userService.findAllUsers().subscribe(
      users => {
        this.users = users;
        this.loadingQueryParams();
        this.isLoadingData = false;
        this.message = '';
      },
      error => this.message = 'Fail to get users...'
    );
  }

  private loadingQueryParams() {
    this.activatedRoute.queryParams.subscribe(
      params => {
        const id = params['id'];
        this.action = params['action'];
        if (id)
          this.selectedUser = this.users.find(user => user.id === +id)!;
        else{
          this.selectedUser = new User();
        }

      }
    );
  }

  view(id: number){
    this.router.navigate(['admins', 'users'], {queryParams: {action: 'view', id: id}});
  }

  add(){
    this.router.navigate(['admins', 'users'], {queryParams: {action: 'add'}});
  }

}
