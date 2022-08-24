import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { data } from '../model/data';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

// Fazer requisições get foi mais fácil
// Fazer Post estão sendo o maior desafio porque estou tendo que usar
// OAuth2. OAutjh estava dando erro 403.
export class TweetService {
  constructor(private http: HttpClient) {}

  getUserId(username: string) {
    const URL = `https://cors-anywhere.herokuapp.com/http://api.twitter.com/2/users/by/username/${username}`;
    console.log(URL);
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${environment.BEARER_TOKEN}`,
        Accept: '*/*'
      })
    };

    console.log(`Bearer ${environment.BEARER_TOKEN}`);

    return this.http.get(URL, httpOptions);
  }

  getAllTweets() {}

  postTweet(tweet: string) {}
}
