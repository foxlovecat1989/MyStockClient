import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Activity } from 'src/app/model/Activity';
import { ActivityType } from 'src/app/model/ActivityType';
import { ActivityTypeService } from 'src/app/services/ActivityTypeService/activity-type.service';

@Component({
  selector: 'admin-activities-edit',
  templateUrl: './admin-activities-edit.component.html',
  styleUrls: ['./admin-activities-edit.component.css']
})
export class AdminActivitiesEditComponent implements OnInit {

  @Input('activity')
  activity!: Activity;

  @Output('dataReloadEvent')
  dataReloadEvent = new EventEmitter();
  message= 'Loading Data, please wait...';
  activityForm!: FormGroup;
  valuesOfActivityType!: Array<string>;
  keysOfActivityType!: Array<string>;

  constructor(
    private formBuilder: FormBuilder,
    private activityTypeService: ActivityTypeService
    ) { }

  ngOnInit(): void {
    this.initForm();
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
      limtAmout: [this.activity.limitAmount, [Validators.required, Validators.min(1)]],
      activityType: [this.activity.activityType, Validators.required]
    });
    this.message = '';
  }

  save(){

  }
}
