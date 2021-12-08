import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Activity } from 'src/app/model/Activity';
import { ActivityService } from 'src/app/services/activity.service';
import { ActivityTypeService } from 'src/app/services/activity-type.service';
import { FormResetService } from 'src/app/services/form-reset.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'admin-activities-edit',
  templateUrl: './admin-activities-edit.component.html',
  styleUrls: ['./admin-activities-edit.component.css']
})
export class AdminActivitiesEditComponent implements OnInit, OnDestroy {

  @Input('activity')
  activity!: Activity;

  @Output('dataReloadEvent')
  dataReloadEvent = new EventEmitter();
  message= 'Loading Data, please wait...';
  activityForm!: FormGroup;
  keysOfActivityType!: Array<string>;
  resetEventSubscription!: Subscription;
  


  constructor(
    private formBuilder: FormBuilder,
    private activityTypeService: ActivityTypeService,
    private activityService: ActivityService,
    private router: Router,
    private formResetService: FormResetService,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.initForm();
    this.resetEventSubscription = this.formResetService.resetActivityFormEvent.subscribe(
      activity => {
        this.activity = activity;
        this.initForm();
      }
    );
  }

  ngOnDestroy(): void {
    this.resetEventSubscription.unsubscribe();
  }

  private initForm() {
    this.keysOfActivityType = this.activityTypeService.getKeysOfActivityType();
    this.activityForm = this.formBuilder.group({
      id: this.activity.id,
      name: [this.activity.name, Validators.required],
      location: [this.activity.location, Validators.required],
      startDate: [this.activity.startDate, Validators.required],
      startTime: [this.activity.startTime, Validators.required],
      endTime: [this.activity.endTime, Validators.required],
      limitAmount: [this.activity.limitAmount, [Validators.required, Validators.min(1)]],
      activityType: [this.activity.activityType, Validators.required]
    });
    this.message = '';
  }

  save(){
    this.message = 'Saving data, please wait...';
    this.activity.name = this.activityForm.controls['name'].value;
    this.activity.location = this.activityForm.controls['location'].value;
    this.activity.startDate = this.activityForm.controls['startDate'].value;
    this.activity.startTime = (<string>(this.activityForm.controls['startTime'].value)).slice(0, 5);
    this.activity.endTime = (<string>(this.activityForm.controls['endTime'].value)).slice(0, 5);
    this.activity.limitAmount = this.activityForm.controls['limitAmount'].value;
    this.activity.activityType = this.activityForm.controls['activityType'].value;
    if(this.activity.id)
      this.saveEdit();
    else
      this.saveAdd();
  }

  private saveEdit() {
    this.activityService.editActivityT(this.activity, this.authService.jwtToken).subscribe(
      activity => {
        this.activity = activity;
        this.message = '';
        this.dataReloadEvent.emit();
        this.router.navigate(['admins', 'activities'], {queryParams: {action: 'view', id: this.activity.id}});
      },
      error => this.message = 'Fail to update this activity, please try again...'
    );
  }
  private saveAdd() {
    this.activityService.createActivity(this.activity).subscribe(
      activity => {
        this.activity = activity;
        this.message = '';
        this.dataReloadEvent.emit();
        this.router.navigate(['admins', 'activities'], {queryParams: {action: 'view', id: this.activity.id}});
      },
      error => this.message = 'Fail to create this activity, please try again...'
    );
  }
}
