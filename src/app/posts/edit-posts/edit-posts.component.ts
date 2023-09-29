import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription, of } from 'rxjs';
import { Post } from 'src/app/models/posts.model';
import { AppState } from 'src/app/store/app.state';
import { getPostById } from '../state/posts.selector';
import { updatePost } from '../state/posts.actions';

@Component({
  selector: 'app-edit-posts',
  templateUrl: './edit-posts.component.html',
  styleUrls: ['./edit-posts.component.css']
})
export class EditPostsComponent implements OnInit, OnDestroy{

  postForm: FormGroup = new FormGroup({});
  post: Post = {} as Post;
  postSubscription: Subscription = {} as Subscription;
  
  constructor(private store: Store<AppState>, private route: ActivatedRoute, private router: Router)
  {
    
  }

ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    const id = Number(params.get('id'));
    this.postSubscription = this.store.select(getPostById(id)).subscribe(
      (data: Post | null) => {
        if(data){
          this.post = data;
          this.createForm();
        }
      }
    )
  });
}

createForm(): void{
  this.postForm = new FormGroup({
    title: new FormControl(this.post.title, [
      Validators.required,
      Validators.minLength(6)
    ]),
    description: new FormControl(this.post.description, [Validators.required, Validators.minLength(10)])
  });
}

onUpdatePost() {
  const title = this.postForm.value.title;
  const description = this.postForm.value.description;

  // dispatch the action
  const post: Post = {
    id: this.post.id,
    title: title,
    description: description
  };

  this.store.dispatch(updatePost({post}));
  this.router.navigate(["/posts"]);
}

ngOnDestroy(): void {
  if(this.postSubscription){
    this.postSubscription.unsubscribe();
  }
}

}
