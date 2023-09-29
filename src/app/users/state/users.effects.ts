import { UsersService } from './../../services/users.service';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { usersLoad, usersLoadFail, usersLoadSuccess } from "./users.actions";
import { catchError, exhaustMap, map, of } from "rxjs";
import { User } from 'src/app/models/users.model';

@Injectable()
export class UsersEffects {
    constructor(private actions$: Actions, private usersService: UsersService){}

    loadUsers$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(usersLoad),
            exhaustMap(() =>
                this.usersService.getUsersList()
                    .pipe(
                        map((data: User[]) => {
                            return usersLoadSuccess({users: data});
                        },
                        catchError((error) => {
                            return of(usersLoadFail());
                        })
                ))
            )
        );
    });
}