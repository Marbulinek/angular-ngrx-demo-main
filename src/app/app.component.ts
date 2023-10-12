import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppState } from './store/app.state';
import { Store } from '@ngrx/store';
import { getErrorMessage, getLoading } from './store/shared/shared.selector';
import { setLoadingSpinner } from './store/shared/shared.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-app';
  showLoading: Observable<boolean> = of();
  errorMessage: Observable<string> = of();

  constructor(private store: Store<AppState>){

  }

  ngOnInit(): void{
    this.store.dispatch(setLoadingSpinner({status: false}));
    this.showLoading = this.store.select(getLoading);
    this.errorMessage = this.store.select(getErrorMessage);
  }
  
}
