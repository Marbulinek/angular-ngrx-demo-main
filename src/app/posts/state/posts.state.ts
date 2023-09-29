import { Post } from "src/app/models/posts.model";

export interface PostsState {
    posts: Post[];
}

const initialState: PostsState = {
    posts: [
        {id: 1, title: 'Sample Title 1', description: 'Sample description 1'},
        {id: 2, title: 'Sample Title 2', description: 'Sample description 2'}
    ]
};

export default initialState;