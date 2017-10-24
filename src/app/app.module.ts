import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { TimeContentComponent } from './time-content/time-content.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    TimeContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
