import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Post } from 'src/app/models/posts.model';
import { AppState } from 'src/app/store/app.state';
import { getPosts } from '../state/posts.selector';
import { deletePost, initializePosts } from '../state/posts.actions';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit{
  
  posts$: Observable<Post[]> = of();


  constructor(private store: Store<AppState>)
  {
    
  }


  ngOnInit(): void {
    this.posts$ = this.store.select(getPosts);

    const postList = [
        { id: 1, title: 'Sample Title 1', description: 'Sample description 1' },
        { id: 2, title: 'Sample Title 2', description: 'Sample description 3' }
    ];
    this.store.dispatch(initializePosts({posts: postList}))
  }

  onDeletePost(e: Event, post: Post)
  {
    e.preventDefault();
    if(post){
      this.store.dispatch(deletePost({post}));
    }
  }

}
