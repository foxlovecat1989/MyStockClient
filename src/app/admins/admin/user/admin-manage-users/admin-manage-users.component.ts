import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'admin-manage-users',
  templateUrl: './admin-manage-users.component.html',
  styleUrls: ['./admin-manage-users.component.css']
})
export class AdminManageUsersComponent implements OnInit {

  users!: Array<User>;
  message = '';
  isLoadingData = true;
  selectedUser!: User;
  action!: string;

  constructor(
    private dataService: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadingData();
  }



  loadingData() {
    this.dataService.findAllUsers().subscribe(
      users => {
        this.users = users;

      },
      error => this.message = 'Fail to get users...'
    );

    this.loadingQueryParams();
  }

  private loadingQueryParams() {
    this.activatedRoute.queryParams.subscribe(
      params => {
        const id = params['id'];
        this.action = params['action'];
        if (id) {
          this.selectedUser = this.users.find(user => user.id === +id)!;
        } else {
          this.selectedUser = new User();
        }
      }
    );
  }

  view(id: number){
    this.router.navigate(['admins', 'admin', 'users'], {queryParams: {action: 'view', id: id}});
  }

  edit(id: number){
    this.router.navigate(['admins', 'admin', 'users'], {queryParams: {action: 'edit', id: id}});
  }

  add(){

  }

}
