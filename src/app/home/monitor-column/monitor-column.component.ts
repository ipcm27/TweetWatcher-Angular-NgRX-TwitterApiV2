import { Component, OnInit } from '@angular/core';
import { data } from 'src/app/model/data';
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
  tweets = [
    'Estou me sentindo tão bem',
    'Meu emprego é muito melhor que meu antigo',
    ':)o'
  ];

  constructor(private service: TweetService) {}

  ngOnInit(): void {}

  onClick() {
    this.myGetIdResponse = this.service
      .getUserId(this.monitoredUsername)
      .subscribe();
    console.log(this.myGetIdResponse);
  }
}
