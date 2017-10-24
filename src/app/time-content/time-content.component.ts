import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-content',
  templateUrl: './time-content.component.html',
  styleUrls: ['./time-content.component.css']
})
export class TimeContentComponent implements OnInit {
  public currentTime = new Date();
  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }

}
