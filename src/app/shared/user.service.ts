import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { 
    this.http=http;
  }

   getTweetsUser(){ // llamado por el home.
    return this.http.get("http://jsonplaceholder.typicode.com/posts");
  }

  getTweetsUserSelected(userId:number){
    return this.http.get("http://jsonplaceholder.typicode.com/posts?userId="+ userId);
  }

  getTweetSelected(idTweet:number){ // llamado por el componet detailsTweet
    return this.http.get("http://jsonplaceholder.typicode.com/posts?id="+ idTweet);
  }

  getTweetDetails(postId:number){ // llamado por el component detailsTweet
    return this.http.get("http://jsonplaceholder.typicode.com/comments?postId=" + postId);
  }
}
