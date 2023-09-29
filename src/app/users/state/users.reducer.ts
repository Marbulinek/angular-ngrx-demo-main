import { createReducer, on } from "@ngrx/store";
import { initialState } from "./users.state";
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


export function usersReducer(state: any, action: any) {
    return _usersReducer(state, action);
}