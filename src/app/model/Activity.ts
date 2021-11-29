import { ActivityType } from "./ActivityType";

export class Activity {
  id!: number;
  name!: string;
  location!: string;
  startDate!: string;
  startTime!: string;
  endTime!: string;
  activityType!: ActivityType
  limitAmount!: number

  getStartDateAsDate() {
    return new Date(this.startDate);
  }

  static fromHttp(activity: Activity): Activity{
    const newActivity = new Activity();
    newActivity.id = activity.id;
    newActivity.name = activity.name;
    newActivity.location = activity.location;
    newActivity.activityType = activity.activityType;
    newActivity.limitAmount = activity.limitAmount;
    newActivity.startTime = activity.startTime;
    newActivity.endTime = activity.endTime;
    newActivity.startDate = activity.startDate;

    return newActivity;
  }
}
