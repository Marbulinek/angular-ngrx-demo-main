import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/models/posts.model';

const INITIALIZE_POST_STATE = '[post page] initialize posts';
const ADD_POST_ACTION = '[post page] add post';
const UPDATE_POST_ACTION = '[post page] update post';
const DELETE_POST_ACTION = '[post page] delete post';

export const initializePosts = createAction(INITIALIZE_POST_STATE, props<{posts: Post[]}>());
export const addPost = createAction(ADD_POST_ACTION, props<{post: Post}>());
export const updatePost = createAction(UPDATE_POST_ACTION, props<{post: Post}>())
export const deletePost = createAction(DELETE_POST_ACTION, props<{post: Post}>())