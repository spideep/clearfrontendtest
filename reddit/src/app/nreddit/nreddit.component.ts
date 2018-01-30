import {Component, OnInit, Output, Input} from '@angular/core';
import {RedditDataService} from '../reddit-data.service';
import {Post} from '../post';


@Component({
  selector: 'app-nreddit',
  templateUrl: './nreddit.component.html',
  styleUrls: ['./nreddit.component.css'],
  providers: [RedditDataService]
})
export class NredditComponent implements OnInit {
  page: number = 1;
  @Input('subreddit') subreddit: string;

  posts: Post[];
  lastpostname: string;

  constructor(private data: RedditDataService) {
  }

  ngOnInit() {
    this.data.fetchPosts(this.subreddit, null, null, 1).subscribe(
      posts => this.posts = posts
    );
  }

  changeThisPage(event) {
    this.page = event.page;
    this.data.fetchPosts(this.subreddit, (this.page + 25).toString(), null, this.page).subscribe(
      posts => this.posts = posts
    );
    this.lastpostname = this.data.getLastPost();
  }
}
