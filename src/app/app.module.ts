import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { VideosComponent } from './videos/videos.component';
import { PeopleComponent } from './people/people.component';
import { DocumentComponent } from './document/document.component';
import { ActivityComponent } from './activity/activity.component';
import { ChannelComponent } from './channel/channel.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: DocumentComponent },
    ]) ],
  declarations: [ AppComponent, HelloComponent, VideosComponent, PeopleComponent, DocumentComponent, ActivityComponent, ChannelComponent, TopBarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
