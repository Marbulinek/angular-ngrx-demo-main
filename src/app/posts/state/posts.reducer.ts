import { createReducer, on } from '@ngrx/store';
import initialState from './posts.state';
import { addPost, deletePost, updatePost } from './posts.actions';


const _postsReducer = createReducer(
    initialState,
    on(addPost, (state, action) => {
        let post = {...action.post};
        post.id = (state.posts.length + 1);
        return {
            ...state,
            posts: [...state.posts, post],
        }
    }),
    on(updatePost, (state, action) => {
        const foundIndex = state.posts.findIndex(x => x.id === action.post.id);
        let updatedList = [...state.posts];
        updatedList[foundIndex] = action.post;
        return {
            ...state,
            posts: updatedList
        }
    }),
    on(deletePost, (state, action) => {
        const foundIndex = state.posts.findIndex(x => x.id === action.post.id);
        let updatedList = [...state.posts];
        updatedList.splice(foundIndex, 1);
        return {
            ...state,
            posts: updatedList
        }
    })
);


export function postsReducer(state: any, action: any)
{
    return _postsReducer(state, action)
}