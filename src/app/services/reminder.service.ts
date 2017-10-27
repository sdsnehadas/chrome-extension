import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class ReminderService {

  public reminders: any;
  constructor(private http: Http) {
    this.reminders = [];
  }

  addReminder(reminder) {
    let p = new Promise((resolve) => {
      reminder.id = this.reminders.length + 1;
      this.reminders.push(reminder);
      resolve(reminder)
    }
    )
    return reminder;
  }

  getAllReminders() {
    let p = new Promise((resolve) =>
      setTimeout(() => resolve(this.reminders), 100)
    )
    return Observable.fromPromise(p).map((responseData) => {
      return responseData;
    });
  }

  removeReminder(reminder) {
    let p = new Promise((resolve) =>
      setTimeout(() => {
        _.remove(this.reminders, {
          id: reminder.id
        });
        resolve(this.reminders)
      }, 100)
    )
    return this.reminders;
  }

}
