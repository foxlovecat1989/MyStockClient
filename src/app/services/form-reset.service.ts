import { EventEmitter, Injectable } from '@angular/core';
import { Activity } from '../model/Activity';

@Injectable({
  providedIn: 'root'
})
export class FormResetService {
  resetActivityFormEvent = new EventEmitter<Activity>();
  constructor() { }
}
