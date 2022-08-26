import { Component, OnInit } from '@angular/core';

import { TweetService } from 'src/app/service/Tweet.service';

@Component({
  selector: 'app-monitor-column',
  templateUrl: './monitor-column.component.html',
  styleUrls: ['./monitor-column.component.css']
})
export class MonitorColumnComponent implements OnInit {
  isReceived: boolean = false;
  monitoredUsername: string = '';
  myGetIdResponse!: any;

  User = {
    name: '',
    id: ''
  };
  tweets = [];

  constructor(private service: TweetService) {}

  ngOnInit(): void {}

  arrangeData(tweets: any[], userinfo: any) {}

  onClick() {
    this.service.getMonitoredUserInfoAndTweets(this.monitoredUsername);
  }
}
