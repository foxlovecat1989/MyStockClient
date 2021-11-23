import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/model/User';

@Component({
  selector: 'admin-manage-user-edit',
  templateUrl: './admin-manage-user-edit.component.html',
  styleUrls: ['./admin-manage-user-edit.component.css']
})
export class AdminManageUserEditComponent implements OnInit {

  @Input('user')
  user!: User;

  @Output('dataChangeEvent')
  dataChangeEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
