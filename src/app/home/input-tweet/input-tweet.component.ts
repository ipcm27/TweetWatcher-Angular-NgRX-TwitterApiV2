import { Component, OnInit } from '@angular/core';
import { TweetService } from '../../service/Tweet.service';

@Component({
  selector: 'app-input-tweet',
  templateUrl: './input-tweet.component.html',
  styleUrls: ['./input-tweet.component.css']
})
export class InputTweetComponent implements OnInit {
  tweet!: any;

  constructor(private tweetService: TweetService) {}

  ngOnInit(): void {}

  onClick() {
    console.log(typeof this.tweet);
    this.tweetService.postTweet(this.tweet);
  }
}
