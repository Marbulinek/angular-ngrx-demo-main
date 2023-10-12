import { Action, createReducer, on } from '@ngrx/store';
import initialState, { PostsState, postsAdapter } from './posts.state';
import { addPost, deletePost, initializePosts, updatePost } from './posts.actions';

const _postsReducer = createReducer(
  initialState,
  on(initializePosts, (state, action) => {
    return postsAdapter.addMany(action.posts, state);
  }),
  on(addPost, (state, action) => {
    return postsAdapter.addOne(action.post, state);
  }),
  on(updatePost, (state, action) => {
    return postsAdapter.upsertOne(action.post, state);
  }),
  on(deletePost, (state, action) => {
    const id = action.post.id ?? 0;
    return postsAdapter.removeOne(id, state);
  })
);

export function postsReducer(state: PostsState, action: Action) {
  return _postsReducer(state, action);
}
