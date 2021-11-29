import { Injectable } from '@angular/core';
import { ActivityType } from 'src/app/model/ActivityType';

@Injectable({
  providedIn: 'root'
})
export class ActivityTypeService {

  keysOfActivityType = Object.keys(ActivityType);
  valuesOfActivityType = new Array<ActivityType>();

  constructor() {

  }

  getKeysOfActivityType(): Array<string>{
    return this.keysOfActivityType;
  }

  getValuesOfActivityType(): Array<string>{
    this.keysOfActivityType.forEach(key => {
      if(this.isValidKey(key))
        this.valuesOfActivityType.push(ActivityType[key]);
    });

    return this.valuesOfActivityType;
  }

  private isValidKey(key: string) : key is keyof object {
    return key in ActivityType;
  }
}
