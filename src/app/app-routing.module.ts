import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'counter',
        loadChildren: () => import('./counter/counter.module').then(m => m.CounterModule),
    },
    {
        path: 'posts',
        loadChildren: () => import('./posts/post.module').then(m => m.PostsModule),
    },
    // {
    //     // path: 'auth',
    //     // loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    // },
    {
        path: 'users',
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
    }
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}