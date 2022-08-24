import { TweetService } from './../../service/Tweet.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-tweets-column',
  templateUrl: './user-tweets-column.component.html',
  styleUrls: ['./user-tweets-column.component.css']
})
export class UserTweetsColumnComponent implements OnInit {
  isReceived: boolean = true;
  User = {
    name: 'Igor Pierre'
  };
  tweets = [
    'Ontem fui a padaraia comprar um pãozinho',
    'hoje é dia de festa, bb',
    'adoro apssear com meu cachorro'
  ];

  constructor(private service: TweetService) {}

  ngOnInit(): void {}
}
