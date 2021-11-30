import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activity } from 'src/app/model/Activity';
import { ActivityService } from 'src/app/services/activity.service';
import { FormResetService } from 'src/app/services/form-reset.service';

@Component({
  selector: 'admin-activities',
  templateUrl: './admin-activities.component.html',
  styleUrls: ['./admin-activities.component.css']
})
export class AdminActivitiesComponent implements OnInit {

  activities!: Array<Activity>;
  selectedActivity!: Activity;
  isLoadingData = true;
  message = 'Loading Data, please wait...';
  action!: string;

  constructor(
    private activityService: ActivityService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formResetService: FormResetService
  ) { }

  ngOnInit(): void {
    this.loadingData();
  }

  public loadingData(){
    this.activityService.getActivities().subscribe(
      actitites => {
        this.activities = actitites;
        this.message = '';
        this.isLoadingData = false;
        this.loadingQueryParams();
      },
      errors => {
        this.message = 'Fail to get activities';
      }
    );
  }

  private loadingQueryParams() {
    this.activatedRoute.queryParams.subscribe(
      params => {
        const id = params['id'];
        this.action = params['action'];
        if (id) // under edit mode
          this.selectedActivity = this.activities.find(activity => activity.id === +id)!;
        else {
          this.selectedActivity = new Activity();
          this.formResetService.resetActivityFormEvent.emit(this.selectedActivity);
        }
      }
    );
  }

  create(){
    this.router.navigate(['admins', 'activities'], {queryParams: {action: 'add'}});
  }

  view(id: number){
    this.router.navigate(['admins', 'activities'], {queryParams: {action: 'view', id: id}});
  }
}
