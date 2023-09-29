import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/models/users.model';
import { AppState } from 'src/app/store/app.state';
import { usersLoad } from '../state/users.actions';
import { getUserList } from '../state/users.selector';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  users$: Observable<User[]> = of();

  constructor(private store: Store<AppState>){
  }

  ngOnInit(): void {
      this.loadUsers();
      this.users$ = this.store.select(getUserList);
  }

  loadUsers(){
    this.store.dispatch(usersLoad())
  }
}
