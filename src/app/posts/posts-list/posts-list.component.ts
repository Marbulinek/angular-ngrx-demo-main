import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Post } from 'src/app/models/posts.model';
import { AppState } from 'src/app/store/app.state';
import { getPosts } from '../state/posts.selector';
import { deletePost } from '../state/posts.actions';

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
  }

  onDeletePost(e: Event, post: Post)
  {
    e.preventDefault();
    if(post){
      this.store.dispatch(deletePost({post}));
    }
  }

}
