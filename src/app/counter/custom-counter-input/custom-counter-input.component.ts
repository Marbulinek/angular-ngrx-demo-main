import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement } from '../state/counter.actions';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent {
  value: number = 0;

  constructor(private store: Store<AppState>)
  {
  }

  onAdd(): void{
    this.store.dispatch(customIncrement({count: Number(this.value)}));
  }
}
