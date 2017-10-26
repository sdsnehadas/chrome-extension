import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { NgForm, NgControlStatus} from '@angular/forms';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.css']
})
export class RemindersComponent implements OnInit {

  public reminder: any;
  constructor() { }

  ngOnInit() {
    this.reminder = { description: ''}
    $('.dropdown-menu').on('click', function(e) {
      e.stopPropagation();
    });
  }

  addReminder(){
    console.log("clicked", this.reminder);
  }

}
