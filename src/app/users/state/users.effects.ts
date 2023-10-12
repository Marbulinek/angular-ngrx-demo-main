import { UsersService } from './../../services/users.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { usersLoad, usersLoadFail, usersLoadSuccess } from './users.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { User } from 'src/app/models/users.model';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import {
  setErrorMessage,
  setLoadingSpinner,
} from 'src/app/store/shared/shared.actions';

@Injectable()
export class UsersEffects {
  constructor(
    private actions$: Actions,
    private usersService: UsersService,
    private store: Store<AppState>
  ) {}

  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(usersLoad),
      exhaustMap(() =>
        this.usersService.getUsersList().pipe(
          map(
            (data: User[]) => {
              this.store.dispatch(setLoadingSpinner({ status: false }));
              return usersLoadSuccess({ users: data });
            },
            catchError((error) => {
              this.store.dispatch(
                setErrorMessage({
                  message: `Error while loading data! ${error}`,
                })
              );
              this.store.dispatch(setLoadingSpinner({ status: false }));
              return of(usersLoadFail());
            })
          )
        )
      )
    );
  });
}
