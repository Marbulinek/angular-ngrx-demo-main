import { createSelector } from '@ngrx/store';
import { createFeatureSelector } from '@ngrx/store';
import { PostsState, postsAdapter } from './posts.state';
import { getCurrentRoute } from 'src/app/store/router/router.selector';
import { RouterStateUrl } from 'src/app/store/router/custom-serializer';

export const POST_STATE_NAME = 'posts';

const getPostsState = createFeatureSelector<PostsState>(POST_STATE_NAME);
export const postsSelectors = postsAdapter.getSelectors();

export const getPosts = createSelector(getPostsState, postsSelectors.selectAll);
export const getPostEntities = createSelector(
  getPostsState,
  postsSelectors.selectEntities
);

export const getPostById = createSelector(
  getPostsState,
  getCurrentRoute,
  (state: PostsState, route: RouterStateUrl) => {
    return state && route ? state.entities[route.params['id']] : null;
  }
);
