import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { Post } from 'src/app/models/posts.model';

export interface PostsState extends EntityState<Post>{}

export const postsAdapter: EntityAdapter<Post> = createEntityAdapter<Post>();

export const initialState: PostsState = postsAdapter.getInitialState({});

export default initialState;
