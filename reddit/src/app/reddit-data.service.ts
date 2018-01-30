import {Injectable} from '@angular/core';
import {Jsonp, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Post} from './post';

@Injectable()
export class RedditDataService {
  lastpostname = null;

  constructor(private jsonp: Jsonp) {
  }

  fetchPosts(subreddit: string, count: string, lastpostname: string, currentPage: number): Observable<Post[]> {
    currentPage = currentPage || 1;
    let params = new URLSearchParams();
    params.set('format', 'json');
    if (count) {
      params.set('count', count);
    }
    if (this.lastpostname) {
      params.set('after', this.lastpostname);
    }

    params.set('jsonp', 'JSONP_CALLBACK');

    const rdurl = 'https://www.reddit.com' + subreddit + '/';
    const endPoint = '.json';
    return this.jsonp.get(rdurl + endPoint, {search: params}).map(data => {
      var posts: Post[] = [];
      let children = data.json().data.children;
      for (var i = 0; i < children.length; i++) {
        let post: Post = new Post();
        post.title = children[i].data.title;
        post.url = children[i].data.url;
        post.name = this.lastpostname = children[i].data.name;
        post.created = children[i].data.created;
        post.thumbnail = children[i].data.thumbnail;
        // post.created = children[i].data.created_utc;
        posts.push(post);
      }
      return posts;
    });
  }

  getLastPost() {
    return this.lastpostname;
  }
}
