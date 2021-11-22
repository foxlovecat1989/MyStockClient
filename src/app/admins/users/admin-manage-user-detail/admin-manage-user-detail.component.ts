import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/model/User';

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

  constructor() { }

  ngOnInit(): void {
  }

}
