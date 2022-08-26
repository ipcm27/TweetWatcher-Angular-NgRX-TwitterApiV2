import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { InputTweetComponent } from './home/input-tweet/input-tweet.component';
import { MonitorColumnComponent } from './home/monitor-column/monitor-column.component';
import { UserTweetsColumnComponent } from './home/user-tweets-column/user-tweets-column.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    InputTweetComponent,
    MonitorColumnComponent,
    UserTweetsColumnComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
