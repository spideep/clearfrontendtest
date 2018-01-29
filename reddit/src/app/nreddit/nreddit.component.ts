import { Component, OnInit, Output, Input } from '@angular/core';
import { RedditDataService } from '../reddit-data.service';
import { Post } from '../post';


@Component({
  selector: 'app-nreddit',
  templateUrl: './nreddit.component.html',
  styleUrls: ['./nreddit.component.css'],
  providers: [RedditDataService]
})
export class NredditComponent implements OnInit {
	@Input('subreddit') subreddit:string;

	posts:Post[];

  constructor( private data: RedditDataService ) { }

  ngOnInit() {
  	this.data.fetchPosts(this.subreddit).subscribe(
  		posts => this.posts = posts
  		);
  }
}
