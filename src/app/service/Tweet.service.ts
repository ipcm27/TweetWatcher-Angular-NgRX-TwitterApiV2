import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/enviroment';
import { Observable } from 'rxjs';
import { catchError, map, retry, switchMap } from 'rxjs/operators';

interface user {
  id: string;
  name: string;
  username: string;
}

interface tweet {
  id: string;
  text: string;
}
@Injectable({
  providedIn: 'root'
})
export class TweetService {
  responseGetId!: any;

  monitoredUser: any = { id: '', name: '', username: '' };
  monitoredUserTweets: any = [{ id: '', text: '' }];

  constructor(private http: HttpClient) {}

  getUserId(username: string) {
    const URL = `/2/users/by/username/${username}`;
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${environment.BEARER_TOKEN}`
      })
    };

    return this.http.get(URL, httpOptions);
  }

  getMultipleTweets(id: string) {
    const URL = `/2/users/${id}/tweets`;
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${environment.BEARER_TOKEN}`
      })
    };

    return this.http.get(URL, httpOptions);
  }

  getMonitoredUserInfoAndTweets(username: string) {
    this.getUserId(username).subscribe(response => {
      this.responseGetId = response;
      console.log(response);
      this.monitoredUser = this.responseGetId.data;
      console.log(this.monitoredUser);

      this.getMultipleTweets(this.monitoredUser.id).subscribe(
        responseTweetsArray => {
          this.monitoredUserTweets = responseTweetsArray;
          console.log(this.monitoredUserTweets);
        }
      );
    });
  }

  postTweet(tweet: string) {}
}
// Fazer requisições get foi mais fácil
// Fazer Post estão sendo o maior desafio porque tive que mudar as permições da API do TWiter
// O maior desafo não estpa sendo nem o NGRX mas sim a API
// Agora estou tendo que faezr um proxy reverse pra poder consutar a API
// O problema agora etsá sendo fazer nested calls pra pegar o tweet de 7 dias. Não estou conseguindo quebrar o objeto
//
