import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Activity } from 'src/app/model/Activity';
import { ActivityService } from 'src/app/services/activity.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'admin-activtities-detail',
  templateUrl: './admin-activtities-detail.component.html',
  styleUrls: ['./admin-activtities-detail.component.css']
})
export class AdminActivtitiesDetailComponent implements OnInit {

  @Input('activity')
  activity!: Activity;
  @Output('dataReloadEvent')
  dataReloadEvent = new EventEmitter();
  message = '';
  isAdmin = false;
  constructor(
    private router: Router,
    private activityService: ActivityService,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    if(this.authService.getRole() === 'ADMIN')
      this.isAdmin = true;
  }

  delete(){
    this.message = 'Deleting data, please wait...';
    this.activityService.deleteActivity(this.activity.id).subscribe(
      next => {
        this.message = '';
        this.dataReloadEvent.emit();
        this.router.navigate(['admins', 'activities']);
      },
      error => this.message = 'Sorry, this activitiy cannot be deleted...'
    );
  }

  edit(){
    this.router.navigate(['admins', 'activities'], {queryParams: {action: 'edit', id: this.activity.id}});
  }

}
