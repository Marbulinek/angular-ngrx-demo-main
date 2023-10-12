import { Action, createReducer, on } from "@ngrx/store";
import { UsersState, initialState } from "./users.state";
import { usersLoadSuccess } from "./users.actions";

const _usersReducer = createReducer(
    initialState,
    on(usersLoadSuccess, (state, action) => {
        return{
            ...state,
            users: action.users
        };
    })
);


export function usersReducer(state: UsersState, action: Action) {
    return _usersReducer(state, action);
}