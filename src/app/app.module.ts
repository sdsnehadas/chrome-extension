import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { TimeContentComponent } from './time-content/time-content.component';
import { LinksComponent } from './links/links.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    TimeContentComponent,
    LinksComponent
  ],
  imports: [
    BrowserModule,NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
