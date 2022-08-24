import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../../app-routing.module';
import { AppComponent } from '../../app.component';
import { HomeComponent } from '../home.component';
import { TweetComponent } from '../../tweet/tweet.component';
import { InputTweetComponent } from '../input-tweet/input-tweet.component';
import { MonitorColumnComponent } from '../monitor-column/monitor-column.component';
import { UserTweetsColumnComponent } from '../user-tweets-column/user-tweets-column.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TweetComponent,

    InputTweetComponent,
    MonitorColumnComponent,
    UserTweetsColumnComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
