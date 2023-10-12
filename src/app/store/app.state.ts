import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { sharedReducer } from './shared/shared.reducer';
import { SHARED_STATE_NAME } from './shared/shared.selector';
import { SharedState } from './shared/shared.state';

export interface AppState {
  [SHARED_STATE_NAME]: SharedState;
  router: RouterReducerState;
}

export const appReducer:any = {
  [SHARED_STATE_NAME]: sharedReducer,
  router: routerReducer
};
