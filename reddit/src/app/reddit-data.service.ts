import {Injectable} from '@angular/core';
import {Jsonp, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Post} from './post';

@Injectable()
export class RedditDataService {
  constructor(private jsonp: Jsonp) {
  }

  fetchPosts(subreddit: string): Observable<Post[]> {

    let params = new URLSearchParams();
    params.set('format', 'json');
    params.set('count', '25');
    params.set('after', 't3_7tp30u');
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
        posts.push(post);
      }
      return posts;
    });
  }
}