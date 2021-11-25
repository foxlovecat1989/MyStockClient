import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/services/UserService/user-service';
import { UsernameValidators } from 'src/app/common/Validators/users/username.validators';
import { PasswordValidators } from 'src/app/common/Validators/users/password.validators';

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
  confirmPassword = '';

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.userForm = this.formBuilder.group({
      id: this.user.id,
      userName: [this.user.username, [Validators.required, UsernameValidators.cannotContainSpace]],
      email: [this.user.email, [Validators.required, Validators.email]],
      password: [this.password, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [this.confirmPassword, Validators.required]
    },{validator: PasswordValidators.passwordShouldMatch});
  }


  save(){
    this.user.username = this.userForm.controls['userName'].value;
    this.user.email = this.userForm.controls['email'].value;
    this.message = 'Saving data, please wait...';
    this.password = this.userForm.controls['password'].value;
    this.confirmPassword = this.userForm.controls['confirmPassword'].value;
    if(this.user.id)
      this.saveEditUser();
    else{
      this.saveAddUser();
    }

  }


  private saveEditUser() {
    this.userService.editUser(this.user).subscribe(
      user => {
        this.user = user;
        this.dataChangeEvent.emit();
        this.router.navigate(['admins', 'users'], {queryParams: {action: 'view', id: this.user.id}});
      },
      error => this.message = 'Fail to update the user...'
    );
  }

  private saveAddUser() {
    this.userService.addUser(this.user, this.password).subscribe(
      user => {
        this.user = user;
        this.dataChangeEvent.emit();
        this.router.navigate(['admins', 'users'], {queryParams: {action: 'view', id: this.user.id}});
      },
      error => this.message = 'Fail to add the user...'
    );
  }
}
