import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { TimeContentComponent } from './time-content/time-content.component';
import { LinksComponent } from './links/links.component';
import { RemindersComponent } from './reminders/reminders.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    TimeContentComponent,
    LinksComponent,
    RemindersComponent
  ],
  imports: [
    BrowserModule,NgbModule.forRoot(),FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
