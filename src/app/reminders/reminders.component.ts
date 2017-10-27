import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { NgForm, NgControlStatus} from '@angular/forms';

import { ReminderService } from "../services/reminder.service";
@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.css']
})
export class RemindersComponent implements OnInit {

  public reminder: any;
  public reminders :any;
  public showValidation : boolean ;
  constructor(private reminderService: ReminderService) { }

  ngOnInit() {    
    this.showValidation = false ;
    this.reminder = { description: ''}
    $('.dropdown-menu').on('click', function(e) {
      e.stopPropagation();
    });

    this.getReminderList();
  }

  getReminderList(){
    this.reminderService.getAllReminders().subscribe(data => {
      this.reminders = data;
      console.log(this.reminders)
    }
    );
  }

  addReminder(){
    if(!this.reminder.description){
      this.showValidation = true ;
    }else{
      this.reminderService.addReminder(this.reminder);
      this.reminder = { description: ''};
      this.showValidation = false ;
      this.getReminderList();
    }
    // window.setInterval(function() {
    //   var elem = document.getElementById('reminderDiv');
    //   elem.scrollTop = elem.scrollHeight;
    // }, 500);
  }

  removeReminder(reminder){
    this.reminderService.removeReminder(reminder);
    this.getReminderList();
  }
}
