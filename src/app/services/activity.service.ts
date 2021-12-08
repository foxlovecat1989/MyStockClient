import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Activity } from 'src/app/model/Activity';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http: HttpClient) { }

  public getActivities(): Observable<Array<Activity>> {

    return this.http.get<Array<Activity>>(environment.restUrl + '/api/v1/activities/findAll', {withCredentials: true}).pipe(
      map(
        datas => {
          const activities = new Array<Activity>();
          datas.forEach(data => activities.push(Activity.fromHttp(data)))

          return activities;
        }
      )
    );
  }

  public deleteActivity(id: number): Observable<any>{
    return this.http.delete<any>(environment.restUrl + '/api/v1/activities/' + id);
  }

  public editActivity(activity: Activity): Observable<Activity>{
    return this.http.patch<Activity>(environment.restUrl + '/api/v1/activities/', activity, {withCredentials: true});
  }


  public createActivity(activity: Activity): Observable<Activity>{
    return this.http.post<Activity>(environment.restUrl + '/api/v1/activities/', activity);
  }
}
