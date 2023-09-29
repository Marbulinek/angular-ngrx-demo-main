import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { UserlistComponent } from './userlist/userlist.component';
import { USERS_STATE_NAME } from './state/users.selector';
import { usersReducer } from './state/users.reducer';
import { UsersEffects } from './state/users.effects';

const routes: Routes = [
    {
        path: '',
        component: UserlistComponent
    }
]

@NgModule({
    declarations: [UserlistComponent],
    imports: [
                CommonModule,
                RouterModule.forChild(routes),
                StoreModule.forFeature(USERS_STATE_NAME, usersReducer),
                ReactiveFormsModule,
                EffectsModule.forFeature([UsersEffects])
            ]
})
export class UsersModule {}