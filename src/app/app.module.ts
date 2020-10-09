import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { VideosComponent } from './videos/videos.component';
import { PeopleComponent } from './people/people.component';
import { DocumentComponent } from './document/document.component';
import { ActivityComponent } from './activity/activity.component';
import { ChannelComponent } from './channel/channel.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, VideosComponent, PeopleComponent, DocumentComponent, ActivityComponent, ChannelComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
