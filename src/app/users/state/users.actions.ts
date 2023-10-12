import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/users.model';

export const USERS_LOAD = '[users page] users load call';
export const USERS_LOAD_SUCCESS = '[users page] users load success';
export const USERS_LOAD_FAIL = '[users page] users load faild';

export const usersLoad = createAction(USERS_LOAD);
export const usersLoadSuccess = createAction(
  USERS_LOAD_SUCCESS,
  props<{ users: User[] }>()
);
export const usersLoadFail = createAction(USERS_LOAD_FAIL);
