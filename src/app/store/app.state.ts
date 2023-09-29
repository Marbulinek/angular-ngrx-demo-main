import { counterReducer } from "../counter/state/counter.reducer";
import { CounterState } from "../counter/state/counter.state";
import { postsReducer } from "../posts/state/posts.reducer";
import { PostsState } from "../posts/state/posts.state";
import { usersReducer } from "../users/state/users.reducer";
import { UsersState } from "../users/state/users.state";

export interface AppState{
    counter: CounterState;
    posts: PostsState;
    users: UsersState;
}

export const appReducer = {
    counter: counterReducer,
    posts: postsReducer,
    users: usersReducer
}