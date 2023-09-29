import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PostsListComponent } from "./posts-list/posts-list.component";
import { AddPostComponent } from "./add-post/add-post.component";
import { EditPostsComponent } from "./edit-posts/edit-posts.component";
import { StoreModule } from "@ngrx/store";
import { postsReducer } from "./state/posts.reducer";
import { POST_STATE_NAME } from "./state/posts.selector";

const routes: Routes = [
    {
        path: '', 
        component: PostsListComponent,
        children: [ 
            {
                path: 'add', component: AddPostComponent
            },
            {
                path: 'edit/:id', component: EditPostsComponent
            }
        ]
    },
];

@NgModule({
    declarations: [
        PostsListComponent,
        AddPostComponent,
        EditPostsComponent,
    ],
    imports: [CommonModule, 
              FormsModule, 
              ReactiveFormsModule,
              StoreModule.forFeature(POST_STATE_NAME, postsReducer),
              RouterModule.forChild(routes),
    ],
})

export class PostsModule{}