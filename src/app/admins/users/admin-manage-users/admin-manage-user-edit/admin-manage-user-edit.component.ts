import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'admin-manage-user-edit',
  templateUrl: './admin-manage-user-edit.component.html',
  styleUrls: ['./admin-manage-user-edit.component.css']
})
export class AdminManageUserEditComponent implements OnInit {

  @Input('user')
  user!: User;
  @Input('action')
  action!: string;
  @Output('dataChangeEvent')
  dataChangeEvent = new EventEmitter();
  message = '';
  userForm!: FormGroup;
  password = '';

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.userForm = this.formBuilder.group({
      id: this.user.id,
      userName: this.user.username,
      email: this.user.email,
      password: this.password
    });
  }

  save(){
    this.user.username = this.userForm.controls['userName'].value;
    this.user.email = this.userForm.controls['email'].value;
    this.message = 'Saving data, please wait...';
    this.password = this.userForm.controls['password'].value;
    if(this.user.id)
      this.saveEditUser();
    else{
      this.saveAddUser();
    }

  }


  private saveEditUser() {
    this.dataService.editUser(this.user).subscribe(
      user => {
        this.user = user;
        this.dataChangeEvent.emit();
        this.router.navigate(['admins', 'users'], {queryParams: {action: 'view', id: this.user.id}});
      },
      error => this.message = 'Fail to update the user...'
    );
  }

  private saveAddUser() {
    this.dataService.addUser(this.user, this.password).subscribe(
      user => {
        this.user = user;
        this.dataChangeEvent.emit();
        this.router.navigate(['admins', 'users'], {queryParams: {action: 'view', id: this.user.id}});
      },
      error => this.message = 'Fail to add the user...'
    );
  }
}
