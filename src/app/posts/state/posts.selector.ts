import { createSelector } from '@ngrx/store';
import { createFeatureSelector } from '@ngrx/store';
import { PostsState } from './posts.state';
import { Post } from 'src/app/models/posts.model';

export const POST_STATE_NAME = 'posts';

const getPostsState = createFeatureSelector<PostsState>(POST_STATE_NAME);

export const getPosts = createSelector(getPostsState, state => {
    return state.posts;
});

export const getPostById = (postId: number) => createSelector(getPostsState, (state) => {
    const foundPost =  state.posts.find((x: Post) => x.id === postId);
    return (foundPost) ? foundPost : null;
});