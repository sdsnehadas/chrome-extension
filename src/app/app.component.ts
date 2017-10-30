import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public imagesList ;

  constructor() { }
  ngOnInit() {
    setInterval(this.changeBackground, 6000);
  }

  changeBackground() {
    this.imagesList = [
      { url: '../assets/background.jpg' },
      { url: '../assets/background2.jpg' },
      { url: '../assets/mybg1.jpg' },
      { url: '../assets/background3.jpg' },
      { url: '../assets/12.jpg' }];
    document.body.style.backgroundImage = 'url(' +this.imagesList[Math.floor( Math.random() * 4)].url+ ')' ;
  }

}
